import React, { useState } from 'react';
import { Provider as PaperProvider, DefaultTheme, DarkTheme, Button } from 'react-native-paper';
import SplashScreenNavigator from './src/navigation/SplashScreenNavigator';
import { View } from 'react-native';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <PaperProvider theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <View style={{ flex: 1 }}>
        <SplashScreenNavigator />
        <Button onPress={toggleTheme}>
          {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </Button>
      </View>
    </PaperProvider>
  );
}
