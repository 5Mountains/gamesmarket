import React from 'react';
import {View, Text, SafeAreaView, Pressable, ScrollView} from 'react-native';
import {InputField} from '../../components/InputField';

import {styles} from './styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

import LoginSvg from '../../assets/images/misc/login.svg';
import GoogleSvg from '../../assets/images/misc/google.svg';
import FacebookSvg from '../../assets/images/misc/facebook.svg';
import TwitterSvg from '../../assets/images/misc/twitter.svg';
import {CustomButton} from '../../components/CustomButton';
import {useAuthContext} from '../../context/AuthContextProvider';

export const LoginScreen = ({navigation}: any) => {
  const {login} = useAuthContext();

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView
        style={{marginHorizontal: 25}}
        showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <LoginSvg
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          />
        </View>
        <Text style={styles.title}>Login</Text>

        <InputField
          icon={
            <MaterialIcons name="alternate-email" size={20} color="#666666" />
          }
          placeholder="Email ID"
          keyboardType="email-address"
        />

        <InputField
          icon={
            <IonIcons
              name="ios-lock-closed-outline"
              size={20}
              color="#666666"
            />
          }
          placeholder="Password"
          secureTextEntry={true}
          fieldButtonLabel="Forgot?"
          fieldButtonFunction={() => console.log('pressed')}
        />

        <CustomButton label="Login" onPress={() => login()} />

        <Text style={{textAlign: 'center', color: '#666666', marginBottom: 30}}>
          Or, login with...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <Pressable
            onPress={() => {}}
            style={{
              borderColor: '#dddddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <GoogleSvg height={24} width={24} />
          </Pressable>
          <Pressable
            onPress={() => {}}
            style={{
              borderColor: '#dddddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FacebookSvg height={24} width={24} />
          </Pressable>
          <Pressable
            onPress={() => {}}
            style={{
              borderColor: '#dddddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <TwitterSvg height={24} width={24} />
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={{color: '#666666'}}>New to the App?</Text>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={{fontWeight: '700', color: '#ad40af', marginLeft: 5}}>
              Register
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
