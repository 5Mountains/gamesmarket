import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    transform: [{rotate: '-5deg'}],
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  socialIcon: {
    borderColor: '#dddddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  title: {
    fontFamily: 'RobotoMono-Medium',
    fontWeight: '500',
    fontSize: 28,
    color: '#333333',
    marginBottom: 30,
  },
});
