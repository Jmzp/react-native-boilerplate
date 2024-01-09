import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { observer } from 'mobx-react';
import { NAVIGATION } from '_constants';
import { Login } from '_screens';
import { useStores } from '_@shared/stores';

const Stack = createStackNavigator();

function AuthNavigator() {
  const { userStore } = useStores();
  const user = userStore.currentUser;

  const defaultOptions = {
    headerShown: false,
    animationTypeForReplace: user ? 'push' : 'pop',
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name={NAVIGATION.login}
        options={defaultOptions}
      />
    </Stack.Navigator>
  );
}

export default observer(AuthNavigator);
