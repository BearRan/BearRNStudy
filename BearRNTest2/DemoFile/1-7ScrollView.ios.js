/**
 * Created by apple on 2017/7/11.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    ScrollView,
    Image,
    Text,
} from 'react-native';

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return(
            <ScrollView>
                <Text style={{fontSize: 46}}>Scroll me plz</Text>
                <Image source={require('./../img/A1.jpg')} />
                <Image source={require('./../img/A1.jpg')} />
                <Text style={{fontSize: 46}}>Scroll me plz</Text>
                <Image source={require('./../img/A1.jpg')} />
                <Image source={require('./../img/A1.jpg')} />
                <Text style={{fontSize: 46}}>Scroll me plz</Text>
                <Image source={require('./../img/A1.jpg')} />
                <Image source={require('./../img/A1.jpg')} />
                <Text style={{fontSize: 46}}>Scroll me plz</Text>
                <Image source={require('./../img/A1.jpg')} />
                <Image source={require('./../img/A1.jpg')} />
                <Text style={{fontSize: 46}}>Scroll me plz</Text>
                <Image source={require('./../img/A1.jpg')} />
                <Image source={require('./../img/A1.jpg')} />
            </ScrollView>
        );
    }
};

AppRegistry.registerComponent('BearRNTest2', () => IScrolledDownAndWhatHappenedNextShockedMe);