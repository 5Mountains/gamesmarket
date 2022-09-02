import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {IListItemProps} from './types';
import {windowWidth} from '../../utils/Dimensions';

export const ListItem = ({
  poster,
  title,
  subtitle,
  isFree,
  price,
}: IListItemProps) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <Image
        source={poster}
        style={{width: 55, height: 55, borderRadius: 10, marginRight: 10}}
      />

      <View style={{width: windowWidth - 250}}>
        <Text
          style={{
            fontSize: 14,
            color: '#333333',
            fontFamily: 'RobotoMono-Regular',
          }}>
          {subtitle}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 14,
            color: '#333333',
            fontFamily: 'RobotoMono-Regular',
            textTransform: 'uppercase',
          }}>
          {title}
        </Text>
      </View>
      <Pressable
        style={{
          backgroundColor: '#0aada8',
          width: 100,
          padding: 10,
          borderRadius: 10,
          marginLeft: 'auto',
        }}>
        <Text
          style={{
            fontSize: 14,
            color: '#333333',
            fontFamily: 'RobotoMono-Regular',
            textAlign: 'center',
          }}>
          {isFree === 'Yes' ? 'Play' : `${price}`}
        </Text>
      </Pressable>
    </View>
  );
};
