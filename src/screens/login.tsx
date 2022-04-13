import React, { useState } from "react";

import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import { useFormik } from "formik";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import * as Yup from "yup";

import { Button, FormInput } from "@components/atoms";
import { useOrientation } from "@hooks";
import { Color, FontSize, Indent, Radius, Screen, signIn, signUp } from "@utils";

interface FormModel {
  email: string;
  password: string;
  userName: string;
}

const initialValues: FormModel = { userName: "", email: "", password: "" };

const placeholders = ["Username", "Email", "Password"];

export function LoginScreen(props: BottomTabScreenProps<ParamListBase, Screen.LOGIN>) {
  const { navigation } = props;

  const [model, setModel] = useState<FormModel>(initialValues);
  const updateModel = (field: keyof FormModel, data: string) => {
    setModel({ ...model, [field]: data });
  };

  const [isLogin, setIsLogin] = useState(true);
  const reset = () => {
    setModel(initialValues);
    setError(undefined);
    resetForm();
  };

  const toggle = () => {
    setIsLogin(!isLogin);
    reset();
  };

  const signInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password should have at least 8 symbols")
      .required("Password is required")
  });

  const signUpSchema = Yup.object().shape({
    userName: Yup.string().required("Username is required")
  });

  const [error, setError] = useState<string>();

  const onSubmit = (model: FormModel) => {
    const { userName, email, password } = model;
    (isLogin ? signIn(email, password) : signUp(userName, email, password))
      .then(() => {
        navigation.navigate(Screen.CHARACTERS);
        reset();
      })
      .catch((e: FirebaseAuthTypes.NativeFirebaseAuthError) => setError(e.nativeErrorMessage));
  };

  const { handleChange, handleSubmit, errors, resetForm } = useFormik({
    onSubmit,
    initialValues,
    validateOnBlur: false,
    validateOnMount: false,
    validateOnChange: false,
    validationSchema: isLogin ? signInSchema : signInSchema.concat(signUpSchema)
  });

  const inputs = Object.keys(model).map((key, i) => {
    const modelKey = key as keyof FormModel;
    return (
      <FormInput
        key={i}
        style={styles.input}
        value={model[modelKey]}
        error={errors[modelKey]}
        placeholder={placeholders[i]}
        placeholderTextColor={Color.GRAY}
        onChangeText={(text) => {
          handleChange(key)(text);
          updateModel(modelKey, text);
        }}
      />
    );
  });

  const { isPortrait } = useOrientation();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.form, { width: isPortrait ? "85%" : "60%" }]}>
        <Text style={styles.title}>{isLogin ? "Login" : "Registration"}</Text>
        {!isLogin && inputs[0]}
        {inputs.slice(1)}
        <Text style={styles.redirectText} onPress={toggle}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </Text>
        {error && <Text style={styles.error}>{error}</Text>}
        <Button
          style={styles.button}
          onPress={handleSubmit}
          text={isLogin ? "Sign In" : "Sign Up"}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.TRANSPARENT_DARK
  },
  form: {
    padding: Indent.MEDIUM,
    borderRadius: Radius.DEFAULT,
    backgroundColor: Color.TRANSPARENT_CYAN
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: Color.BLUE_LIGHT,
    fontSize: FontSize.HUGE,
    marginBottom: Indent.MEDIUM
  },
  input: {
    marginBottom: Indent.MEDIUM
  },
  redirectText: {
    alignSelf: "flex-start",
    color: Color.BLUE_LIGHT,
    fontSize: FontSize.SMALL,
    textDecorationLine: "underline"
  },
  button: {
    marginTop: Indent.MEDIUM
  },
  error: {
    color: Color.RED,
    marginTop: Indent.DEFAULT
  }
});
