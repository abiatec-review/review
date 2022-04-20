import React from "react";

import { create } from "react-test-renderer";

import { CharacterCard } from "@components/moleculas/cards";
import { Character } from "@redux/models/entities";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});
jest.mock("react-native-image-picker", () => {});
jest.mock("react-native-vector-icons/MaterialIcons", () => {});
jest.mock("@hooks", () => ({ useOrientation: () => ({ isPortrait: true }) }));

const character: Character = {
  id: 1,
  name: "test",
  type: "test",
  gender: "test",
  status: "test",
  species: "test",
  origin: {
    name: "test",
    url: "test"
  },
  location: {
    name: "test",
    url: "test"
  },
  image: "test",
  episode: ["test"],
  url: "test",
  created: "test"
};

test("CharacterCard render", () => {
  const tree = create(<CharacterCard character={character} />).toJSON();
  expect(tree).toMatchSnapshot();
});
