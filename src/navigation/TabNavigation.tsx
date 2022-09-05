import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {CartScreen, FavoriteScreen} from '../screens';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {HomeStack} from './HomeStack';

const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route: any): string => {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (routeName === 'GameDetails') {
    return 'none';
  }
  return 'flex';
};

export const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {backgroundColor: '#ad40af'},
      tabBarInactiveTintColor: '#ffffff',
      tabBarActiveTintColor: 'yellow',
    }}>
    <Tab.Screen
      name="HomeTab"
      component={HomeStack}
      options={({route}): any => ({
        tabBarStyle: {
          display: getTabBarVisibility(route),
          backgroundColor: '#ad40af',
        },
        tabBarIcon: ({color, size}: any) => (
          <Ionicons name={'home-outline'} {...{color, size}} />
        ),
      })}
    />
    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarBadge: 3,
        tabBarBadgeStyle: {backgroundColor: 'yellow'},
        tabBarIcon: ({color, size}) => (
          <Feather name={'shopping-bag'} {...{color, size}} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={FavoriteScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name={'heart-outline'} {...{color, size}} />
        ),
      }}
    />
  </Tab.Navigator>
);
