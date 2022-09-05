import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AuthContextProvider} from './src/context/AuthContextProvider';
import {Navigation} from './src/navigation';

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
