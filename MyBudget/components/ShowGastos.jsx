import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const ShowGastos = ({ gasto, deleteTransac }) => {
  const {description, importe, date} = gasto;
  return (
    <View style={styles.listItem}>
        <Text>Importe: {importe} </Text>
        <Text>Descripción: {description} </Text>
        <Text>Fecha: {date} </Text>

        <TouchableOpacity style={styles.botton}>
                    <View >
                        <Text >Modificar</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botton} onPress={ () => deleteTransac(gasto.key)}>
                    <View >
                        <Text >Eliminar</Text>
                    </View>
            </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    listItem: {
        top: 70,
        display: 'flex',
        position: 'absolute',
        height: 130,
        width: '70%',
        borderWidth: 1,
        borderColor: "white",
        alignItems: 'center'
    },
    botton: {
        top:7,
        borderWidth: 1,
        width:65,
        backgroundColor: "#C67359"
    }

});