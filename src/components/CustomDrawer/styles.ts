import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  drawerContainer: {
    backgroundColor: '#8200d6',
  },
  topBgImage: {
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  topTitle: {
    fontFamily: 'RobotoMono-Medium',
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 5,
  },
  topTextContainer: {
    flexDirection: 'row',
  },
  topText: {
    fontFamily: 'RobotoMono-Regular',
    color: '#ffffff',
    marginRight: 10,
  },
  itemList: {
    backgroundColor: '#ffffff',
    paddingTop: 10,
  },
  bottomContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
  buttonStyle: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 15,
    fontFamily: 'RobotoMono-Regular',
    marginLeft: 10,
  },
});
