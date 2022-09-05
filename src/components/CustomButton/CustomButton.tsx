import {Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ICustomButtonProps} from './types';

export const CustomButton = ({label, onPress}: ICustomButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
};
