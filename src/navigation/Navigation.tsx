import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AuthStack} from './AuthStack';
import {MainStack} from './MainStack';

export const Navigation = (): JSX.Element => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(false);
  }, []);

  return (
    <NavigationContainer>
      {isAuth ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
