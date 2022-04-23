import React from "react";

import { create } from "react-test-renderer";

import { LocationCard } from "@components/moleculas/cards";
import { Location } from "@redux/models/entities";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});
jest.mock("react-native-image-picker", () => {});
jest.mock("react-native-vector-icons/MaterialIcons", () => {});
jest.mock("@hooks", () => ({ useOrientation: () => ({ isPortrait: true }) }));

const location: Location = {
  id: 1,
  name: "test",
  type: "test",
  dimension: "test",
  residents: ["test"],
  url: "test",
  created: "test"
};

test("LocationCard render", () => {
  const tree = create(<LocationCard location={location} />).toJSON();
  expect(tree).toMatchSnapshot();
});
