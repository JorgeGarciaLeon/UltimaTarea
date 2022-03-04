import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Nabvar } from './components/Nabvar';
import { useState } from 'react';
import { ShowGastos } from './components/ShowGastos';

export default function App () {

  const [saldo, setSaldo] = useState(0);
  const [listadoGastos, setListadoGastos] = useState([]);
  const [viewModal, setViewModal] = useState(false);


  const deleteTransac = (saldoKey) => {
    setListadoGastos((currentGastosList) => {
      return currentGastosList.filter((gasto) => gasto.key !== saldoKey);
    })
  }

  return (
    <View style={styles.container} >
      <Nabvar saldo={saldo} />
      
      <FlatList data={listadoGastos} renderItem={(gasto) => {
        return (
          <ShowGastos viewModal={viewModal} gasto={gasto} deleteTransac={deleteTransac}/>
        )

      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flex: 1,
    backgroundColor: '#FDDDCA',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: "90%"
  },
  text:{
    width: '90%',
    height: 50,
    backgroundColor: 'red'
    
  }
});
