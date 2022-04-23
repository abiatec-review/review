import React from "react";

import { create } from "react-test-renderer";

import { CharacterDetailsModal } from "@components/moleculas/modals";
import { Character } from "@redux/models/entities";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});
jest.mock("react-native-image-picker", () => {});
jest.mock("react-native-vector-icons/MaterialIcons", () => {});

let mockOrientation = true;
jest.mock("@hooks", () => ({ useOrientation: () => ({ isPortrait: mockOrientation }) }));

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

describe("CharacterDetailsModal render", () => {
  const modalProps = { isShown: true, toggle: () => {}, character };

  test("portrait", async () => {
    const tree = create(<CharacterDetailsModal {...modalProps} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test("landscape", () => {
    mockOrientation = false;
    const tree = create(<CharacterDetailsModal {...modalProps} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
