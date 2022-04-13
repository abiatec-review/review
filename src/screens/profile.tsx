import React, { useState } from "react";

import { useFormik } from "formik";
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import { ImagePickerResponse } from "react-native-image-picker";
import * as Yup from "yup";

import { Button, FormInput, Spinner } from "@components/atoms";
import { PhotoModal } from "@components/moleculas/modals";
import { useOrientation } from "@hooks";
import { Color, FontSize, getUser, Indent, signOut, updateUser } from "@utils";

export function ProfileScreen() {
  const user = getUser();

  if (!user) return <Spinner />;

  const [isModalShown, setIsModalShown] = useState(false);
  const toggleModal = () => setIsModalShown(!isModalShown);

  const [photo, setPhoto] = useState(user.photoURL);
  const choosePhoto = (photo: ImagePickerResponse) => {
    const { assets } = photo;
    assets && setPhoto(assets[0].uri || null);
  };

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = ({ displayName }: { displayName: string | null }) => {
    setIsLoading(true);
    updateUser({ displayName, photoURL: photo })?.then(() => {
      Alert.alert("Data successfully updated");
      setIsLoading(false);
    });
  };

  const validationSchema = Yup.object().shape({
    displayName: Yup.string().required("Username is required")
  });

  const { handleSubmit, handleChange, errors } = useFormik({
    onSubmit,
    validationSchema,
    validateOnBlur: false,
    validateOnMount: false,
    validateOnChange: false,
    initialValues: { displayName: user.displayName }
  });

  const { isPortrait } = useOrientation();
  const styles = isPortrait ? baseStyles : landscapeStyles;

  return (
    <SafeAreaView style={styles.screen}>
      <Pressable onPress={toggleModal} style={styles.image}>
        <Image
          source={photo ? { uri: photo } : require("@assets/placeholder.png")}
          style={styles.image}
        />
      </Pressable>
      <View style={styles.form}>
        <FormInput
          style={styles.input}
          placeholder="Username"
          error={errors.displayName}
          placeholderTextColor={Color.GRAY}
          onChangeText={handleChange("displayName")}
          defaultValue={user.displayName || undefined}
          inputStyle={{ backgroundColor: Color.TRANSPARENT_CYAN }}
        />
        <View style={styles.buttons}>
          <Button
            text="Update"
            onPress={handleSubmit}
            style={[styles.button, styles.updateButton]}
          />
          <Button text="Sign Out" onPress={signOut} style={styles.button} />
        </View>
      </View>
      <PhotoModal isShown={isModalShown} toggle={toggleModal} choosePhoto={choosePhoto} />
      {isLoading && (
        <View style={styles.loader}>
          <Spinner />
        </View>
      )}
    </SafeAreaView>
  );
}

const baseStyles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.TRANSPARENT_DARK
  },
  nameContainer: {
    alignItems: "center"
  },
  displayName: {
    fontWeight: "bold",
    color: Color.WHITE,
    fontSize: FontSize.HUGE
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 250,
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: "80%"
  },
  input: {
    marginTop: Indent.MEDIUM
  },
  buttons: {
    flexDirection: "row",
    marginTop: Indent.MEDIUM
  },
  button: {
    flex: 1
  },
  updateButton: {
    marginRight: Indent.DEFAULT,
    backgroundColor: Color.GRAY
  },
  loader: {
    flex: 1,
    bottom: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.TRANSPARENT_DARK
  }
});

const landscapeStyles = StyleSheet.create({
  ...baseStyles,
  screen: {
    ...baseStyles.screen,
    flexDirection: "row"
  },
  image: {
    ...baseStyles.image,
    width: 270,
    height: 270
  },
  form: {
    width: "60%",
    marginLeft: Indent.MEDIUM
  }
});
