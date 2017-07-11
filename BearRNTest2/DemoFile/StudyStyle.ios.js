/**
 * Created by apple on 2017/7/11.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class LotsOfStyles extends Component {
    render() {
        return (
            <View>
                <Text style={styles.red}>Just red</Text>
                <Text style={styles.bigBlue}>Just bigBlue</Text>
                <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
                <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'orange',
    // },
});

AppRegistry.registerComponent('BearRNTest2', () => LotsOfStyles );