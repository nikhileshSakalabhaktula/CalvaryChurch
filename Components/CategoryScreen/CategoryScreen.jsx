import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native';

const CategoryScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Category list</Text>
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

export default CategoryScreen;