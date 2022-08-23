import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Movies from './src/Movies';

export default function App() {
  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-blue-100">
        <Movies />
      </View>
    </TailwindProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
