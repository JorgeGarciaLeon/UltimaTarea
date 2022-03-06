import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';


export const AddGasto = ({ viewModal, addGasto, modificar, gastoModificar, editarGasto }) => {

  const [importe, setImporte] = useState()
  const [descripcion, setDescripcion] = useState()
  const [key, setKey] = useState()
  const [date, setDate] = useState()
  

  const objetoImporte = gastoModificar?.importe
  const objetoDescription = gastoModificar?.descripcion
  const objetoKey = gastoModificar?.key
  const objetoDate = gastoModificar?.fecha


  // Importante: Esto de aqui fue explicado por mi compañero de clase debido a que esta
  // parte de la forma que la intente hacer no fui capaz y mi compañero me explico esta forma de realizarlo.

  useEffect(() => {
    if (
      objetoImporte !== importe &&
      objetoDescription !== descripcion &&
      objetoKey !== key &&
      objetoDate !== date   
    ) {
      setImporte(objetoImporte);
      setDescripcion(objetoDescription)
      setKey(objetoKey)
      setDate(objetoDate)
    }
  }, [objetoImporte, objetoDescription, objetoKey, objetoDate]);

  let newGasto = {
    descripcion: '',
    importe: ''
    
  }

  let modificarGast = {
    key:'',
    importe: '',
    descripcion: '',
    fecha: ''
  }

  const changeImporte = (importe) => {
    setImporte(importe);
  }

  const changeDescripcion = (descripcion) => {
    setDescripcion(descripcion);
  }

  const sendGasto = () => {
    if(modificar){
       modificarGast = {
        key:key,
        importe: importe,
        descripcion: descripcion,
        fecha: date
      }

      editarGasto(modificarGast);

    }else{
      newGasto = {
        descripcion: descripcion,
        importe: importe
        
      }
  
      addGasto(newGasto);
      setImporte('');
      setDescripcion('');
    }
    
  }

  return (
    <Modal visible={viewModal} animationType={'fade'} transparent={true}>
      <View style={styles.inputModal}>

        <View style={styles.comicInput}>
          <TextInput
            placeholder={"Importe"}
            value={importe}
            onChangeText={changeImporte}
          />
        </View>

        <View style={styles.comicInput}>
          <TextInput
            placeholder={"Descripción"}
            value={descripcion}
            onChangeText={changeDescripcion}
          />
        </View>

        <TouchableOpacity onPress={sendGasto} >
          <View >
            <Text>{modificar ? "Modificar Gasto": "Añadir Gasto"}</Text>
          </View>
        </TouchableOpacity>

      </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
  inputModal: {
    top: "30%",
    left: "30%",
    justifyContent: "center",
    alignItems: "center",
    height: "35%",
    borderColor: "#000",
    borderWidth: 5,
    width: 150,
    backgroundColor: "white"
  },
  comicInput: {
    borderWidth: 1,
    borderColor: "#000",
    width: '80%',
    alignItems: "center"
  }

});