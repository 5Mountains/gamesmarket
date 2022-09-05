import React, {createContext, useContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

export const AuthContext = createContext<any>(undefined);

export const AuthContextProvider = ({children}: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(null);

  const login = async () => {
    try {
      setIsLoading(true);

      EncryptedStorage.setItem('userToken', 'randomUserToken');

      setIsLoading(false);
    } catch (e) {
      setUserToken(null);
      setIsLoading(false);

      Alert.alert((e as Error).message);
    }
  };

  const logout = () => {
    try {
      setIsLoading(true);

      setUserToken(null);
      EncryptedStorage.removeItem('userToken');

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);

      Alert.alert((e as Error).message);
    }
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);

      const existUserToken = await EncryptedStorage.getItem('userToken');
      setUserToken(existUserToken);

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);

      Alert.alert((e as Error).message);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
