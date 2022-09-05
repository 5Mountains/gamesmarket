import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, GameDetailsScreen} from '../screens/';

const Stack = createNativeStackNavigator();

export const HomeStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({route}: any) => ({title: route.params?.title})}
      />
    </Stack.Navigator>
  );
};
