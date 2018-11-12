/** @format */

import { AppRegistry,StyleSheet, Text, View, StatusBar  } from 'react-native';

import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.header}>
                    <Icon name={'ios-sunny'} size={80} color={'white'}/>
                    <Text style={styles.temp}>24°</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>
                        Build a <Text style={{color:'red'}}>Fucking</Text> App
                    </Text>
                    <Text style={styles.subtitle}>Let's Make it Rain</Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFD017'
    },
    header: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        // backgroundColor: 'blue'
    },
    temp:{
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 45,
        color: 'white',
    },
    body: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flex: 5,
        // backgroundColor: 'red',
        margin:10
    },
    title:{
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 78,
        color: 'white',
        marginBottom:5
    },
    subtitle:{
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 45,
        color: 'white',
    },

});


AppRegistry.registerComponent("WeatherAndFun", () => App);
