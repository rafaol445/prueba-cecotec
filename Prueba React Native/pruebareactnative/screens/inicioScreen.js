import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Pressable,
} from 'react-native';

import { CardProduct } from '../components/cardProduct';

export class InicioScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [{ name: 'Conga', description: 'Robot Aspirador automatico con base de carga incorporada', price: 230 },
            { name: 'Tostadora', description: 'Para tostar', price: 23 },
            { name: 'Freidora', description: 'Para Freir', price: 46 }]
        };
    }

    detailsScreen = (name, description, price) => {

        this.props.navigation.navigate('Details', { currentName: name, currentDescription: description, currentPrice: price });
    }

    render() {
        return (
            <View style={styleInicioScreen.createContainer}>
                <FlatList
                    data={this.state.product}
                    keyExtractor={(item, index) => index.toString()}
                    style={{ padding: 5 }}
                    renderItem={({ item }) => (
                        <View style={styleInicioScreen.item}>
                            <Pressable onPress={() => this.detailsScreen(item.name, item.description, item.price)}>
                                <CardProduct elemento={item}></CardProduct>
                            </Pressable>
                        </View>
                    )}
                ></FlatList>
            </View>
        );
    };
}

const styleInicioScreen = StyleSheet.create({
    createContainer: {
        backgroundColor: 'white',
        flex: 1,
    },
    button: {
        padding: 10
    },
    item: {
        padding: 10
    }
});

export default InicioScreen;