import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export class CardProduct extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let element = this.props.elemento;
        return (
            <View style={styleCardProduct.elemento}>
                <View style={styleCardProduct.description}>
                    <Text style={{ fontWeight: 'bold' }}>{element.name}</Text>
                </View>
                <View style={styleCardProduct.precio}><Text style={{ fontWeight: 'bold' }}>Precio: {element.price}</Text></View>
            </View>
        );
    }
}

const styleCardProduct = StyleSheet.create({
    elemento: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#99a1f9',
        borderWidth: 1,
        borderColor: 'blue',
    },
    description: {
        flex: 1,
    },
    precio: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
});





