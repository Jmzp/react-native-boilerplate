import React, { useEffect } from 'react';
import { hide } from 'react-native-bootsplash';
import { Provider as PaperProvider } from 'react-native-paper';
import { enableScreens } from 'react-native-screens';
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import FlashMessage from 'react-native-flash-message';
import { Linking } from 'react-native';
import { checkVersion } from 'react-native-check-version';
import ENV from 'react-native-config';
import RootNavigator from '_navigation';
import { theme } from '_theme';

dayjs.locale('es');

enableScreens(true);

function App() {
  const hideSplashScreen = async () => {
    await hide({ fade: true });
  };

  console.log(ENV);

  useEffect(() => {
    hideSplashScreen();
  }, []);

  useEffect(() => {
    const asyncFunction = async () => {
      const res = await checkVersion();
      if (res.needsUpdate) {
        await Linking.openURL(res.url);
      }
    };
    asyncFunction();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <RootNavigator />
      <FlashMessage position="top" />
    </PaperProvider>
  );
}

export default App;
