/**
 * Created by apple on 2017/7/10.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
} from 'react-native';

class Gretting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name1}!</Text>
        )
    }
}

class LotsOfGrettings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instruction}>
                    Welcome to React Native!
                </Text>
                <Gretting name1='Rexxar' />
                <Gretting name1='Jaina' />
                <Gretting name1='Valeera' />
            </View>
            // <View style={{alignItems: 'center'}}>
            //
            // </View>
         );
    }
}

const styles = StyleSheet.create({
   container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
   },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('BearRNTest2', () => LotsOfGrettings);