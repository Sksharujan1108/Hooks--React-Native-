import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import State from './Component/State';
import Input from './Component/Input';

export default function App() {
  return (
    
    <State/>
    // <Input />
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
