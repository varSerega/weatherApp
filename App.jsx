import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import WeatherHunt from './src/screens/WeatherHunt';
import SplashScreen from './src/splashscreen/SplashScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      <StatusBar style={styles} />
      {showSplash ? <SplashScreen /> : <WeatherHunt />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
