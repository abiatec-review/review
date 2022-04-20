import React from "react";

import { create } from "react-test-renderer";

import { CharactersModal } from "@components/moleculas/modals";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});
jest.mock("react-native-image-picker", () => {});
jest.mock("react-native-vector-icons/MaterialIcons", () => {});

let mockOrientation = true;
jest.mock("@hooks", () => ({ useOrientation: () => ({ isPortrait: mockOrientation }) }));

describe("CharactersModal render", () => {
  const modalProps = { title: "test", isShown: true, toggle: () => {}, charactersUrls: [] };

  test("portrait", () => {
    const tree = create(<CharactersModal {...modalProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("landscape", () => {
    mockOrientation = false;
    const tree = create(<CharactersModal {...modalProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
