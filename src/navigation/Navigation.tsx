import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AuthStack} from './AuthStack';
import {MainStack} from './MainStack';
import {useAuthContext} from '../context/AuthContextProvider';
import {Loader} from '../components/Loader';

export const Navigation = (): JSX.Element => {
  const {isLoading, userToken} = useAuthContext();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      {userToken ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
