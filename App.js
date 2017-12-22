import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Analytics from 'appcenter-analytics';
import Crashes from 'appcenter-crashes';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.big}>
                    App Center demo
                </Text>
                <Button
                    onPress={() => Analytics.trackEvent('Button tapped', { date: new Date().toString()})}
                    title="Tap to track an event"
                />
                <Button
                    onPress={() => Crashes.generateTestCrash()}
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
