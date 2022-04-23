import React from "react";

import { create } from "react-test-renderer";

import { PhotoModal } from "@components/moleculas/modals";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});
jest.mock("react-native-image-picker", () => ({
  CameraOptions: {},
  ImageLibraryOptions: {},
  ImagePickerResponse: {},
  launchCamera: jest.fn,
  launchImageLibrary: jest.fn
}));
jest.mock("react-native-vector-icons/MaterialIcons", () => jest.fn());

let mockOrientation = true;
jest.mock("@hooks", () => ({ useOrientation: () => ({ isPortrait: mockOrientation }) }));

describe("PhotoModal", () => {
  const modalProps = { isShown: true, toggle: () => {}, choosePhoto: () => {} };

  test("portrait", () => {
    const tree = create(<PhotoModal {...modalProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("landscape", () => {
    mockOrientation = false;
    const tree = create(<PhotoModal {...modalProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
