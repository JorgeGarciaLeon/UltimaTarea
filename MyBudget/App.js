import { StyleSheet, Text, View } from 'react-native';
import { Nabvar } from './components/Nabvar'
import { useState } from 'react'

export default function App() {

  const [saldo, setSaldo] = useState(0);

  return (
    <View>
      <Nabvar saldo={saldo} />
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
