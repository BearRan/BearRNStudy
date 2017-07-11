/**
 * Created by apple on 2017/7/11.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';

class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles1.canvasBg}>
                <View style={styles1.canvas}>
                    <TextInput
                        style={{height: 40, backgroundColor: 'blue'}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <Text style={{padding: 20, fontSize: 42}}>
                        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                    </Text>
                </View>
            </View>
        );
    };
}

const styles1 = StyleSheet.create({
    canvasBg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    canvas: {
        width: 300,
        height: 300,
        backgroundColor: 'orange',
        flexDirection: 'row',
    },
    canvasJustifyContent: {
        width: 300,
        height: 300,
        backgroundColor: 'orange',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    canvasAlignItems: {
        width: 300,
        height: 300,
        backgroundColor: 'orange',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        // flex: 1,
        flexDirection: 'column',
        width: 300,
        height: 300,
    },
})

AppRegistry.registerComponent('BearRNTest2', () => PizzaTranslator);