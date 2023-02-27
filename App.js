import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';

export default function App() {
  let [ countnum, setCountNum ] = useState(0);

  function increment() {
    let actualCount = countnum
    let newCount = ++actualCount

    setCountNum(newCount)
    console.log(newCount);
  }

  function resetCounter() {
    setCountNum(0)

  }

  function showCredits() {
    // web only
    alert('Névjegy Balogh Csenge SzoftIIN')
  }

  return (
    <View style={styles.container}>
      <Button title='Reset' onPress={resetCounter}>Reset Counter</Button>

      <Text
        style={styles.title}
      >Press button to count o_O</Text>

      <Text>{countnum}</Text>

      <TouchableHighlight
        style={styles.runButton}
        onPress={increment}
      >
        <Text>Count</Text>
      </TouchableHighlight>

      <Button onPress={showCredits}>Credits</Button>
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
  runButton: {
    backgroundColor: 'rgba(57, 0, 129, 0.2)',
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
    border: 'solid 2px grey',
    width: '50%',
    textAlign: 'center'
  },
  title: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
