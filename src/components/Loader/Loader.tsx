import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const Loader = () => {
  return (
    <View style={styles.rootContainer}>
      <ActivityIndicator size={'large'} color="#ad40af" />
      <Text style={styles.loaderText}>Loading...</Text>
    </View>
  );
};
