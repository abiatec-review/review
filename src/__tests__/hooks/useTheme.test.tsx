import { renderHook } from "@testing-library/react-hooks";

import { useTheme } from "@hooks";
import { DarkTheme, LightTheme } from "@utils";

jest.mock("@react-native-firebase/auth", () => {});
jest.mock("@react-native-firebase/storage", () => {});

let mockScheme = "light";
jest.mock("react-native", () => ({ useColorScheme: () => mockScheme }));

describe("useTheme", () => {
  test("light theme", () => {
    const { result } = renderHook(() => useTheme());
    const { colors, isDark } = result.current;
    expect(colors).toBe(LightTheme);
    expect(isDark).toBe(false);
  });

  test("dark theme", () => {
    mockScheme = "dark";
    const { result } = renderHook(() => useTheme());
    const { colors, isDark } = result.current;
    expect(colors).toBe(DarkTheme);
    expect(isDark).toBe(true);
  });
});
