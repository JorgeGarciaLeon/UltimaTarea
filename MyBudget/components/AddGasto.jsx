import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';


export const AddGasto = ({ viewModal, addGasto }) => {

  const [importe, setImporte] = useState()
  const [descripcion, setDescripcion] = useState()

  let newGasto = {
    descripcion: '',
    importe: ''
    
  }

  const changeImporte = (importe) => {
    setImporte(importe);
  }

  const changeDescripcion = (descripcion) => {
    setDescripcion(descripcion);
  }

  const sendGasto = () => {
    newGasto = {
      descripcion: descripcion,
      importe: importe
      
    }

    addGasto(newGasto);
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
            <Text>Añadir Gasto</Text>
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