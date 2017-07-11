/**
 * Created by apple on 2017/7/11.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
} from 'react-native';

//  指定宽高
class FixedDimensionBasics extends Component {
    render() {
        return (
            <View>
                <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}} />
                <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}} />
                <View style={{width: 200, height: 200, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};

//  弹性（Flex）宽高
class FlexDimensionsBasics extends Component {
    render() {
        return (
            // 试试去掉父View中的`flex: 1`。
            // 则父View不再具有尺寸，因此子组件也无法再撑开。
            // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};

// AppRegistry.registerComponent('BearRNTest2', () => FixedDimensionBasics);
AppRegistry.registerComponent('BearRNTest2', () => FlexDimensionsBasics);