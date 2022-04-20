import React from "react";

import { create } from "react-test-renderer";

import { TextRow } from "@components/atoms";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});

test("TextRow render", () => {
  const tree = create(<TextRow field="test" data="test" />).toJSON();
  expect(tree).toMatchSnapshot();
});
