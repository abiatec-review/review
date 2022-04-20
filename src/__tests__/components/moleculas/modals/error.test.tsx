import React from "react";

import { create } from "react-test-renderer";

import { ErrorModal } from "@components/moleculas/modals";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});
jest.mock("react-native-image-picker", () => {});
jest.mock("react-native-vector-icons/MaterialIcons", () => {});

let mockOrientation = true;
jest.mock("@hooks", () => ({ useOrientation: () => ({ isPortrait: mockOrientation }) }));

describe("ErrorModal render", () => {
  test("portrait", () => {
    const tree = create(<ErrorModal errorText="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("landscape", () => {
    mockOrientation = false;
    const tree = create(<ErrorModal errorText="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
