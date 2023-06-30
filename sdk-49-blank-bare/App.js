import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

function onButtonClick() {
  const hello = 'world';
  console.log({ hello });
  return hello;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button onPress={onButtonClick} title="Click me" />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
