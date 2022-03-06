import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Nabvar } from './components/Nabvar';
import { useState } from 'react';
import { ShowGastos } from './components/ShowGastos';
import { AddGasto } from './components/AddGasto';

export default function App() {

  const [saldo, setSaldo] = useState(0);
  const [listadoGastos, setListadoGastos] = useState([]);
  const [viewModal, setViewModal] = useState(false);


  const deleteTransac = (gastos) => {

    setSaldo(parseInt(saldo)-parseInt(gastos.importe))

    setListadoGastos((currentGastosList) => {
      return currentGastosList.filter((gasto) => gasto.key !== gastos.key);
    })
  }


  const addGasto = (gasto) => {
    if(parseInt(gasto.importe) > 0){
      setSaldo(parseInt(saldo)+parseInt(gasto.importe))
    }

    if(gasto.importe.substr(0,1) === '-'){
      setSaldo(parseInt(saldo)-parseInt(gasto.importe.substr(1)));
    }
   
    

    setListadoGastos(() =>
      [...listadoGastos, { key: Math.random().toString(), descripcion: gasto.descripcion, importe: gasto.importe, fecha: Date(Date.now().toLocaleString()).slice(0, 15) }]);
      
    setViewModal(false)
  };

  return (
    <View style={styles.container} >
        <Nabvar saldo={saldo} />




      <AddGasto viewModal={viewModal} addGasto={addGasto} />



      <TouchableOpacity style={styles.button} onPress={() => setViewModal(true)}>
        <View >
          <Text >Añadir Gasto</Text>
        </View>
      </TouchableOpacity>


      <FlatList data={listadoGastos} renderItem={(gasto) => {
        return (
          <ShowGastos deleteTransac={deleteTransac} gasto={gasto.item} />
        )

      }} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#FDDDCA',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: "90%"
  },
  text: {
    width: '90%',
    height: 50,
    backgroundColor: 'red'
  },
  button: {
    borderWidth: 1,
    backgroundColor: '#C67359',
    position: "absolute",
    bottom: 15,
    right: 8
  }
});
