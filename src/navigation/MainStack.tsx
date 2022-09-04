import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {CustomDrawer} from '../components/CustomDrawer';
import {
  HomeScreen,
  MessagesScreen,
  MomentsScreen,
  ProfileScreen,
  SettingsScreen,
} from '../screens/';

const Drawer = createDrawerNavigator();

export const MainStack = (): JSX.Element => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Messages" component={MessagesScreen} />
      <Drawer.Screen name="Moments" component={MomentsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
