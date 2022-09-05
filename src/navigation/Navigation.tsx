import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AuthStack} from './AuthStack';
import {MainStack} from './MainStack';
import {useAuthContext} from '../context/AuthContextProvider';
import {ActivityIndicator, View} from 'react-native';

export const Navigation = (): JSX.Element => {
  const {isLoading, userToken} = useAuthContext();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
