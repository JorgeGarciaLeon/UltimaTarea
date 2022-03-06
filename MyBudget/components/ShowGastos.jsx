import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const ShowGastos = ({ setModificar, gasto, deleteTransac, setViewModal, setGastoModificar }) => {
    const { descripcion, importe, fecha } = gasto;

    const modificar = () =>{
        setModificar(true);
        setViewModal(true);
        setGastoModificar(gasto);
    }

    return (
        <View style={styles.listItem}>
            <Text>Importe: {importe} </Text>
            <Text>Descripción: {descripcion} </Text>
            <Text>Fecha: {fecha} </Text>

            <TouchableOpacity onPress={modificar}>
                <View >
                    <Text >Editar</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteTransac(gasto)}>
                <View >
                    <Text >Borrar</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        marginTop: '30%',
        height: 150,
        width: 200,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "white",
        shadowColor: "#ccc",
        borderRadius: 5,

    },
    botton: {
        top: 7,
        borderWidth: 1,
        width: 65,
        backgroundColor: "#C67359"
    }

});