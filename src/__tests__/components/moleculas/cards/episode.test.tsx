import React from "react";

import { create } from "react-test-renderer";

import { EpisodeCard } from "@components/moleculas/cards";
import { Episode } from "@redux/models/entities";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});
jest.mock("react-native-image-picker", () => {});
jest.mock("react-native-vector-icons/MaterialIcons", () => {});
jest.mock("@hooks", () => ({ useOrientation: () => ({ isPortrait: true }) }));

const episode: Episode = {
  id: 1,
  name: "test",
  air_date: "test",
  characters: ["test"],
  episode: "test",
  url: "test",
  created: "test"
};

test("EpisodeCard render", () => {
  const tree = create(<EpisodeCard episode={episode} />).toJSON();
  expect(tree).toMatchSnapshot();
});
