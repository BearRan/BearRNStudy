/**
 * Created by apple on 2017/7/12.
 */

import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
        <View>
            <Text>Hello, Chat App!</Text>
            <Button
                onPress={() => navigate('Chat')}
                title="Chat with Lucy"
            />
        </View>
    );
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Chat with Lucy</Text>
                <Button
                    onPress={() => navigate('Chat1', { user: 'Lucy' })}
                    title="Chat with Lucy1"
                />
            </View>
        );
    }
}

class ChatScreen1 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}


const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: { screen: ChatScreen },
    Chat1: { screen: ChatScreen1 },
});

AppRegistry.registerComponent('BearRNTest2', () => SimpleApp);