import {View, Text, Pressable, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GamingIcon from '../../assets/images/misc/gaming.svg';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

export const OnboardingScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar hidden />
      <View style={styles.textContainer}>
        <Text style={styles.title}>GAMES MARKET</Text>
      </View>
      <View style={styles.imageContainer}>
        <GamingIcon
          width={300}
          height={300}
          style={{transform: [{rotate: '-15deg'}]}}
        />
      </View>
      <Pressable
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Let's START</Text>
        <AntDesign name={'right'} color={'white'} size={22} />
      </Pressable>
    </SafeAreaView>
  );
};
