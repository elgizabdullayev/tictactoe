import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { RootNavigator } from './src/navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
        <RootNavigator/>
      </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
