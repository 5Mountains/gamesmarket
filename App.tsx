import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <ScrollView>
        <View>
          <Text>App</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
