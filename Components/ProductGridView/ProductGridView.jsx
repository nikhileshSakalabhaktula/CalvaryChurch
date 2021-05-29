import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, Animated } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.6;

const ProductGridView = ({ data }) => {
    
    if (data && data.length) {
        return (
            <View style={styles.containerView}>
                {
                    data.map((item, index) => (
                        <Image
                            key={index}
                            source={{ uri: item.url }}
                            style={styles.imageGridView}
                        />
                    ))
                }
            </View>
        )
    }
    return null
}

const styles = StyleSheet.create({
    containerView:{
        display: 'flex',
        marginTop: 10,
        flexWrap: 'wrap',
        flexDirection: 'row' ,
        justifyContent: 'center'
    },
    imageGridView: {
        width: width/3,
        height: width/3,
        margin: 10
    }
})

export default ProductGridView;