import React from "react";

import { create } from "react-test-renderer";

import { FormInput } from "@components/atoms";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});

describe("FormInput render", () => {
  test("without error", () => {
    const tree = create(<FormInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("with error", () => {
    const tree = create(<FormInput error="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
