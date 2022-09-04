import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  Pressable,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import {Carousel} from '../../components/Carousel';
import {ListItem} from '../../components/ListItem';
import {Toggle} from '../../components/Toggle';

import {freeGames, paidGames, sliderData} from '../../data/data';
import {windowWidth} from '../../utils/Dimensions';
import {styles} from './styles';

export const HomeScreen = () => {
  const [gamesTab, setGamesTab] = useState<number>(1);
  const navigation = useNavigation<any>();

  const onSelectSwitch = (value: number) => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.rootContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'RobotoMono-Medium'}}>
            Hello USer
          </Text>
          <Pressable onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../../assets/images/user-profile.jpg')}
              style={{width: 50, height: 50}}
              imageStyle={{borderRadius: 25}}
              resizeMode={'contain'}
            />
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            borderColor: '#c6c6c6',
          }}>
          <Feather
            name={'search'}
            color={'#c6c6c6'}
            size={20}
            style={{marginRight: 10}}
          />
          <TextInput placeholder={'Search'} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'RobotoMono-Medium'}}>
            Upcoming Games
          </Text>
          <Pressable onPress={() => console.log('pressed')}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'RobotoMono-Medium',
                color: '#0aada8',
              }}>
              See all
            </Text>
          </Pressable>
        </View>

        <View style={styles.carouselContainer}>
          <Carousel data={sliderData} itemWidth={windowWidth - 40} />
        </View>

        <View style={{marginVertical: 20}}>
          <Toggle
            selectionMode={1}
            option1={'Free to play'}
            option2={'Paid Games'}
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        <View>
          {gamesTab === 1 &&
            freeGames.map(item => <ListItem key={item.id} {...item} />)}
          {gamesTab === 2 &&
            paidGames.map(item => <ListItem key={item.id} {...item} />)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
