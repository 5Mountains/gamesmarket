import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export const CustomDrawer = (props: any) => {
  return (
    <View style={styles.rootContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={require('../../assets/images/menu-bg.jpeg')}
          style={{padding: 20}}>
          <Image
            source={require('../../assets/images/user-profile.jpg')}
            style={{width: 80, height: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{
              fontFamily: 'RobotoMono-Medium',
              fontSize: 18,
              color: '#ffffff',
              marginBottom: 5,
            }}>
            John Doe
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'RobotoMono-Regular',
                color: '#ffffff',
                marginRight: 5,
              }}>
              280 coins
            </Text>
            <FontAwesome5 name={'coins'} size={14} color={'#ffffff'} />
          </View>
        </ImageBackground>
        <View style={{backgroundColor: '#ffffff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <Text>Custom Drawer</Text>
      </View>
    </View>
  );
};
