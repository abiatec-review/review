import React from "react";

import { create } from "react-test-renderer";

import { Modal } from "@components/atoms";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});

let mockIsPortrait = true;
jest.mock("@hooks", () => ({ useOrientation: () => ({ isPortrait: mockIsPortrait }) }));

describe("Modal render", () => {
  const modalProps = { isShown: true, toggle: () => {} };

  test("portrait", () => {
    const tree = create(<Modal {...modalProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("landscape", () => {
    mockIsPortrait = false;
    const tree = create(<Modal {...modalProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
