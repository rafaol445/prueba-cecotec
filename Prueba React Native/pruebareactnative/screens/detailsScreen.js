import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Button,

} from 'react-native';

export class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <View style={styleDetailsProducts.container}>
                <View style={styleDetailsProducts.elemento}>
                    <View style={styleDetailsProducts.description}>
                        <Text style={{ fontWeight: 'bold' }}>{this.props.route.params.currentName}</Text>
                        <Text>{this.props.route.params.currentDescription}</Text>
                    </View>
                    <View style={styleDetailsProducts.precio}><Text style={{ fontWeight: 'bold' }}>Precio: {this.props.route.params.currentPrice}</Text></View>
                </View>
            </View>
        );
    };
}

const styleDetailsProducts = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#ececec"
    },

    elemento: {
        height: 100,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#99a1f9',
        borderWidth: 1,
        borderColor: 'blue',
        justifyContent: "space-around",
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

export default DetailScreen;