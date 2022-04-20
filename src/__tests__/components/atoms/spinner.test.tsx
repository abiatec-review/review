import React from "react";

import { create } from "react-test-renderer";

import { Spinner } from "@components/atoms";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});

test("Spinner render", () => {
  const tree = create(<Spinner />).toJSON();
  expect(tree).toMatchSnapshot();
});
