/**
 * Created by apple on 2017/7/11.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
} from 'react-native';

//  Flex Direction
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

//  Justufy Content
class JustifyContentBasics extends Component {
    render() {
        return(
            <View style={styles.canvasBg}>
                <View style={styles.canvasJustifyContent}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>
            </View>
        );
    }
};

//  Align Items
class AlignItemsBasics extends Component {
    render() {
        return (
            <View style={styles.canvasBg}>
                <View style={styles.canvasAlignItems}>
                    <View style={{ height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
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

// AppRegistry.registerComponent('BearRNTest2', () => FlexDirectionBasics);
// AppRegistry.registerComponent('BearRNTest2', () => JustifyContentBasics);
AppRegistry.registerComponent('BearRNTest2', () => AlignItemsBasics);