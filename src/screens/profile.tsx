import React, { useState } from "react";

import { useFormik } from "formik";
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import { ImagePickerResponse } from "react-native-image-picker";
import * as Yup from "yup";

import { Button, FormInput } from "@components/atoms";
import { LoadingModal, PhotoModal } from "@components/moleculas/modals";
import { useOrientation } from "@hooks";
import { setUser } from "@redux/services";
import { useDispatch, useSelector } from "@redux/store";
import { Color, FontSize, Indent, signOut, updateUser } from "@utils";

export function ProfileScreen() {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.user);

  const [isModalShown, setIsModalShown] = useState(false);
  const toggleModal = () => setIsModalShown(!isModalShown);

  const [photo, setPhoto] = useState<string>();
  const choosePhoto = (photo: ImagePickerResponse) => {
    const { assets } = photo;
    assets && setPhoto(assets[0].uri);
  };

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = ({ displayName }: { displayName: string | null }) => {
    setIsLoading(true);
    const photoURL = photo?.slice(7) || null;
    updateUser({ displayName, photoURL })?.then(() => {
      user && dispatch(setUser({ ...user, displayName, photoURL }));
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
    initialValues: { displayName: user?.displayName || null }
  });

  const { isPortrait } = useOrientation();
  const styles = isPortrait ? baseStyles : landscapeStyles;

  const getPhoto = () => {
    if (photo) return { uri: photo };
    return user?.photoURL ? { uri: user.photoURL } : require("@assets/placeholder.png");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Pressable onPress={toggleModal} style={styles.image}>
        <Image source={getPhoto()} style={styles.image} />
      </Pressable>
      <View style={styles.form}>
        <FormInput
          style={styles.input}
          placeholder="Username"
          error={errors.displayName}
          placeholderTextColor={Color.GRAY}
          onChangeText={handleChange("displayName")}
          defaultValue={user?.displayName || undefined}
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
      {isLoading && <LoadingModal />}
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
