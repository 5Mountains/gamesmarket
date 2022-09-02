import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

export const Toggle = ({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}: any) => {
  const [selectedMode, setSelectedMode] = useState(selectionMode);

  const updateSwitchData = (value: any) => () => {
    console.log(value);
    setSelectedMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        height: 44,
        width: '100%',
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
        borderColor: '#ad40af',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Pressable
        style={{
          flex: 1,
          backgroundColor: selectedMode === 1 ? '#ad40af' : '#e4e4e4',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={updateSwitchData(1)}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'RobotoMono-Medium',
            color: selectedMode === 1 ? '#ffffff' : '#ad40af',
          }}>
          {option1}
        </Text>
      </Pressable>
      <Pressable
        style={{
          flex: 1,
          backgroundColor: selectedMode === 2 ? '#ad40af' : '#e4e4e4',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={updateSwitchData(2)}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'RobotoMono-Medium',
            color: selectedMode === 2 ? '#ffffff' : '#ad40af',
          }}>
          {option2}
        </Text>
      </Pressable>
    </View>
  );
};
