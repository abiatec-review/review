import React from "react";

import { create } from "react-test-renderer";

import { Button } from "@components/atoms";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});

test("Button render", () => {
  const tree = create(<Button text="test" />).toJSON();
  expect(tree).toMatchSnapshot();
});
