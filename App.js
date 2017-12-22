import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Analytics from 'appcenter-analytics';

const codePush = require('react-native-code-push');
const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.big}>
                    Code Push demo
                </Text>
                <Button
                    onPress={() => Analytics.trackEvent('Button tapped', { date: new Date().toString() })}
                    title="Tap to track an event"
                />
                <Button
                    onPress={() => {
                        const arr = [];
                        console.log(arr[42].doesNotExist());
                    }}
                    title="Tap to crash the app"
                />
            </View>
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
        margin: 20,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    big: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

App = codePush(codePushOptions)(App);
export default App;
