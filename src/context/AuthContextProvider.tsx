import React, {createContext, useContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

export const AuthContext = createContext<any>(undefined);

export const AuthContextProvider = ({children}: any) => {
  // const [authData, setAuthData] = useState<AuthData>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userToken, setUserToken] = useState<string | null>(null);

  const login = async () => {
    try {
      setIsLoading(true);

      EncryptedStorage.setItem('userToken', 'randomUserToken');
    } catch (e) {
      setUserToken(null);

      Alert.alert((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    try {
      setUserToken(null);
      EncryptedStorage.removeItem('userToken');
    } catch (e) {
      Alert.alert((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const isLoggedIn = async (): Promise<void> => {
    try {
      const existUserToken = await EncryptedStorage.getItem('userToken');
      if (existUserToken) {
        setUserToken(existUserToken);
      }
    } catch (e) {
      Alert.alert((e as Error).message);
    } finally {
      setIsLoading(false);
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
