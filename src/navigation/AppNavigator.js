import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION } from '_constants';
import { Base } from '_screens';

const Stack = createStackNavigator();

function AppNavigator() {
  const defaultOptions = {
    headerShown: false,
    presentation: 'modal',
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Base}
        name={NAVIGATION.base}
        options={defaultOptions}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
