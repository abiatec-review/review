import React from "react";

import { create } from "react-test-renderer";

import { LoadingModal } from "@components/moleculas/modals";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});
jest.mock("react-native-image-picker", () => {});
jest.mock("react-native-vector-icons/MaterialIcons", () => {});

test("LoadingModal render", () => {
  const tree = create(<LoadingModal />).toJSON();
  expect(tree).toMatchSnapshot();
});
