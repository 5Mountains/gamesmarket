import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GameDetailsScreen = ({navigation, route}: any) => {
  return (
    <View style={styles.rootContainer}>
      <Text>GameDetailsScreen</Text>
      <Text>{route.params?.title}</Text>
    </View>
  );
};
