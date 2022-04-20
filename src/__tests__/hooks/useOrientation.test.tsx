import { renderHook } from "@testing-library/react-hooks";

import { useOrientation } from "@hooks";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});

let mockWindow = { width: 10, height: 20 };
jest.mock("react-native", () => ({
  Dimensions: { get: () => mockWindow, addEventListener: jest.fn }
}));

describe("useOrientation", () => {
  test("portrait", () => {
    const { result } = renderHook(() => useOrientation());
    const { isPortrait } = result.current;
    expect(isPortrait).toBe(true);
  });

  test("landscape", () => {
    mockWindow = { width: 20, height: 10 };
    const { result } = renderHook(() => useOrientation());
    const { isPortrait } = result.current;
    expect(isPortrait).toBe(false);
  });
});
