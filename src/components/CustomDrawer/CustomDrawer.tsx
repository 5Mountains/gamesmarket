import {View, Text, ImageBackground, Image, Pressable} from 'react-native';
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
        contentContainerStyle={styles.drawerContainer}>
        <ImageBackground
          source={require('../../assets/images/menu-bg.jpeg')}
          style={styles.topBgImage}>
          <Image
            source={require('../../assets/images/user-profile.jpg')}
            style={styles.avatar}
          />
          <Text style={styles.topTitle}>John Doe</Text>
          <View style={styles.topTextContainer}>
            <Text style={styles.topText}>280 coins</Text>
            <FontAwesome5 name={'coins'} size={14} color={'#ffffff'} />
          </View>
        </ImageBackground>
        <View style={styles.itemList}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomContainer}>
        <Pressable onPress={() => {}} style={styles.buttonStyle}>
          <Ionicons name="share-social-outline" size={22} />
          <Text style={styles.bottomText}>Tell Friends</Text>
        </Pressable>
        <Pressable onPress={() => {}} style={styles.buttonStyle}>
          <Ionicons name="exit-outline" size={22} />
          <Text style={styles.bottomText}>Sign out</Text>
        </Pressable>
      </View>
    </View>
  );
};
