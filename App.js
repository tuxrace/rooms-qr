import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Main from './src/containers/Main';

const App = () => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <PaperProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle="light-content" />
        <Main />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
