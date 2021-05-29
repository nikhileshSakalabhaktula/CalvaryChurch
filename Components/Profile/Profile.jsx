import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native';

const Profile = () => {
    return(
        <View style={styles.container}>
            <Text>Profile section</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    }
})

export default Profile;