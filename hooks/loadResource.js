import { useState, useEffect } from "react";
import { loadAsync } from "expo-font";

export default function LoadAssets() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  async function loadResourcesAndDataAsync() {
    try {
      // Load fonts
      await loadAsync({
        raleway800: require("../assets/fonts/Raleway/Raleway-ExtraBold.ttf"),
        raleway700: require("../assets/fonts/Raleway/Raleway-Bold.ttf"),
        raleway600: require("../assets/fonts/Raleway/Raleway-SemiBold.ttf"),
        raleway400: require("../assets/fonts/Raleway/Raleway-Regular.ttf"),
      });
    } catch (e) {
      console.warn(e);
    } finally {
      setLoadingComplete(true);
    }
  }

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    loadResourcesAndDataAsync();
  }, []);

  console.log(isLoadingComplete);
  return { isLoadingComplete };
}
