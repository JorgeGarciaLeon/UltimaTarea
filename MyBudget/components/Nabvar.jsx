import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const Nabvar = ({ saldo }) => {

    return (
        <View style={styles.colorNabvar}>
            {saldo < 0 ? <Text style={styles.textColor1}> Mi saldo: {saldo}</Text>: <Text style={styles.textColor}> Mi saldo: {saldo}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    colorNabvar: {
        position: 'absolute',
        backgroundColor: '#000',
        justifyContent: 'center',
        height: 50,
        width: '100%'
    },
    textColor: {
        color:'white',
    },
    textColor1: {
        color:'red',
    },

});
