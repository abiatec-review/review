import { useEffect, useState } from "react";

import { Dimensions, ScaledSize } from "react-native";

export function useOrientation() {
  const [window, setWindow] = useState(Dimensions.get("window"));

  const handleChange = (window: ScaledSize) => {
    setWindow(window);
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) =>
      handleChange(window)
    );
    return () => subscription.remove();
  }, []);

  return {
    width: window.width,
    height: window.height,
    isPortrait: window.width < window.height
  };
}
