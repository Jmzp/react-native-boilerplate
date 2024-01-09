import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { observer } from 'mobx-react';
import AppNavigator from '_navigation/AppNavigator';
import AuthNavigator from '_navigation/AuthNavigator';
import { useStores } from '_@shared/stores';

const RootNavigator = () => {
  const { userStore } = useStores();
  const currentUser = userStore.currentUser;

  return (
    <NavigationContainer>
      {currentUser ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default observer(RootNavigator);
