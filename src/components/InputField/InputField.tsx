import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const InputField = ({
  icon,
  placeholder,
  secureTextEntry = false,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}: any) => {
  return (
    <View style={styles.rootContainer}>
      {icon && icon}
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={styles.textField}
      />
      {fieldButtonFunction && fieldButtonLabel && (
        <Pressable onPress={fieldButtonFunction}>
          <Text style={styles.fieldLabel}>{fieldButtonLabel}</Text>
        </Pressable>
      )}
    </View>
  );
};
