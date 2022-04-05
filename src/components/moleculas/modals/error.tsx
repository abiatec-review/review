import { Colors, FontSize, Indent } from "@utils";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

import Modal from "./modal";

interface Props {
  errorText?: string;
}

export function ErrorModal(props: Props) {
  const { errorText } = props;

  const [isModalShown, setIsModalShown] = useState<boolean>();
  const toggleModal = () => setIsModalShown(!isModalShown);

  useEffect(() => {
    setIsModalShown(!!errorText);
  }, [errorText]);

  return (
    <Modal isShown={!!isModalShown} toggle={toggleModal}>
      <Text style={error}>{errorText}</Text>
    </Modal>
  );
}

const { error } = StyleSheet.create({
  error: {
    color: Colors.RED,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: FontSize.HUGE,
    marginBottom: Indent.MEDIUM
  }
});
