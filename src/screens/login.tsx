import React, { useState } from "react";

import { firebase, FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { Text, SafeAreaView, View, StyleSheet, Pressable } from "react-native";
import * as Yup from "yup";

import { FormInput } from "@components/atoms";
import { useOrientation } from "@hooks";
import { Color, FontSize, Indent, Radius, Screen } from "@utils";

interface SignInModel {
  email: string;
  password: string;
}

interface SignUpModel extends SignInModel {
  userName: string;
}

type FormModel = SignInModel & SignUpModel;

const initialValues = { userName: "", email: "", password: "" };

const placeholders = ["Username", "Email", "Password"];

export function LoginScreen() {
  const [model, setModel] = useState<FormModel>(initialValues);
  const updateModel = (field: keyof FormModel, data: string) => {
    setModel({ ...model, [field]: data });
  };

  const [isLogin, setIsLogin] = useState(true);
  const toggle = () => {
    setIsLogin(!isLogin);
    setModel(initialValues);
    setError(undefined);
    resetForm();
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

  const { navigate } = useNavigation();

  const handleSignIn = ({ email, password }: SignInModel) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate(Screen.Characters))
      .catch((e: FirebaseAuthTypes.NativeFirebaseAuthError) => setError(e.nativeErrorMessage));
  };

  const handleSignUp = (model: SignUpModel) => {
    const { email, password, userName: displayName } = model;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({ displayName });
        navigate(Screen.Characters);
      })
      .catch((e: FirebaseAuthTypes.NativeFirebaseAuthError) => setError(e.nativeErrorMessage));
  };

  const { handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues,
    validateOnBlur: false,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: isLogin ? handleSignIn : handleSignUp,
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
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{isLogin ? "Sign In" : "Sign Up"}</Text>
        </Pressable>
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
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Indent.MEDIUM,
    borderRadius: Radius.DEFAULT,
    backgroundColor: Color.BLUE_LIGHT
  },
  buttonText: {
    fontWeight: "500",
    color: Color.WHITE,
    fontSize: FontSize.DEFAULT
  },
  error: {
    color: Color.RED,
    marginTop: Indent.DEFAULT
  }
});
