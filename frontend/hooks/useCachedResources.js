import { useState, useEffect } from 'react';

import * as SecureStore from 'expo-secure-store';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from "expo-asset";
import * as Font from 'expo-font';

export default function useCachedResources() {

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [user, setUser] = useState(null);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        
        // Load user data
        const cachedUser = await SecureStore.getItemAsync("user")

        if (cachedUser !== null) {
          const parsedUser = await JSON.parse(cachedUser)
          setUser(parsedUser)
        }

        // Load assets
        await Asset.loadAsync([
          require("../assets/images/icon.png"),
          require("../assets/images/logo.png"),
          require("../assets/images/scuola.jpeg"),
          require("../assets/images/student-hat.png"),
          require("../assets/images/wallpaper.png"),
          require("../assets/images/login-illustration.png")
        ]),
          // Load fonts
          await Font.loadAsync({
            "open-sans-light": require("../assets/fonts/OpenSans-Light.ttf"),
            "open-sans-regular": require("../assets/fonts/OpenSans-Regular.ttf"),
            "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf")
          })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
        console.log(e)
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return { isLoadingComplete, user };
}
