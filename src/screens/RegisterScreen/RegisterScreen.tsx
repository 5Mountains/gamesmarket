import React, {useState} from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import {styles} from './styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

import DatePicker from 'react-native-date-picker';

import RegisterSvg from '../../assets/images/misc/registration.svg';
import GoogleSvg from '../../assets/images/misc/google.svg';
import FacebookSvg from '../../assets/images/misc/facebook.svg';
import TwitterSvg from '../../assets/images/misc/twitter.svg';
import {InputField} from '../../components/InputField';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomButton} from '../../components/CustomButton';

export const RegisterScreen = ({navigation}: any) => {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);
  const [open, setOpen] = useState(false);
  const [dobLevel, setDobLevel] = useState('Date of Birth');

  const getPickerDate = (years: number) => {
    const newDate = new Date();
    newDate.setFullYear(newDate.getFullYear() - years);
    return newDate;
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <RegisterSvg height={300} width={300} style={styles.image} />
        </View>
        <Text style={styles.title}>Register</Text>

        <View style={styles.socialIconsContainer}>
          <Pressable
            onPress={() => console.log('google pressed')}
            style={styles.socialIcon}>
            <GoogleSvg height={24} width={24} />
          </Pressable>
          <Pressable
            onPress={() => console.log('facebook pressed')}
            style={styles.socialIcon}>
            <FacebookSvg height={24} width={24} />
          </Pressable>
          <Pressable
            onPress={() => console.log('twitter pressed')}
            style={styles.socialIcon}>
            <TwitterSvg height={24} width={24} />
          </Pressable>
        </View>

        <Text style={{textAlign: 'center', color: '#666666', marginBottom: 30}}>
          Or, register with email...
        </Text>

        <InputField
          icon={<IonIcons name="person-outline" size={20} color="#666666" />}
          placeholder="Full Name"
        />

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
        />

        <InputField
          icon={
            <IonIcons
              name="ios-lock-closed-outline"
              size={20}
              color="#666666"
            />
          }
          placeholder="Confirm Password"
          secureTextEntry={true}
        />

        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#cccccc',
            paddingBottom: 10,
            marginBottom: 30,
          }}>
          <IonIcons name="calendar-outline" size={20} color="#666666" />
          <Pressable
            style={{justifyContent: 'center', flex: 1}}
            onPress={() => setOpen(true)}>
            <Text style={{color: '#B8B8B8', marginLeft: 5}}>{dobLevel}</Text>
          </Pressable>
        </View>
        <DatePicker
          modal
          open={open}
          date={date}
          minimumDate={getPickerDate(90)}
          maximumDate={getPickerDate(18)}
          mode={'date'}
          onConfirm={newDate => {
            setOpen(false);
            setDate(newDate);
            setDobLevel(newDate.toDateString());
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <CustomButton label="Register" onPress={() => console.log('pressed')} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={{color: '#666666'}}>Already registered?</Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={{fontWeight: '700', color: '#ad40af', marginLeft: 5}}>
              Login
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
