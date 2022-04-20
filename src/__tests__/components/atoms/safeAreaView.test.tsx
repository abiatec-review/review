import React from "react";

import { create } from "react-test-renderer";

import { SafeAreaView } from "@components/atoms";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});

test("SafeAreView render", () => {
  const tree = create(<SafeAreaView />).toJSON();
  expect(tree).toMatchSnapshot();
});
