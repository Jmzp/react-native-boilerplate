import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Login.styles';
import strings from '_localization';
import GoogleIcon from '_assets/icons/google_icon.png';
import OnaPicsIconOne from '_assets/icons/ona_pics_icon_one.png';
import { useStores } from '_@shared/stores';
import { LoadingIndicator } from '_components';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { userStore } = useStores();
  const onGoogleButtonPress = async () => {
    setIsLoading(true);
    await userStore.login();
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.mainText}>{strings.appName}</Text>
        <View style={styles.headerIconContainer}></View>
        <Image source={OnaPicsIconOne} style={styles.headerIcon} />
      </View>
      <View style={styles.bottomContainer}>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <TouchableOpacity
            accessibilityRole="button"
            style={styles.googleButton}
            onPress={onGoogleButtonPress}
          >
            <Image style={styles.googleIcon} source={GoogleIcon} />
            <Text style={styles.googleButtonText}>{strings.login.signInGoogle}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Login;
