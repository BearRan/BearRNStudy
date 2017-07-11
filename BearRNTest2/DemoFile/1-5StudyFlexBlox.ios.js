/**
 * Created by apple on 2017/7/11.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
} from 'react-native';

class FlexDirectionBasics extends Component {
    render() {
        return (
            <View style={styles.canvasBg}>
                <View style={styles.canvas}>
                    <View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
                    <View style={{width:50, height:50, backgroundColor: 'skyblue'}} />
                    <View style={{width:50, height:50, backgroundColor: 'steelblue'}} />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
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

AppRegistry.registerComponent('BearRNTest2', () => FlexDirectionBasics);