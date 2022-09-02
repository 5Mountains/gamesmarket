import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: 'RobotoMono-Bold',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#ad40ed',
    width: '90%',
    borderRadius: 5,
    marginBottom: 50,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'RobotoMono-BoldItalic',
  },
});
