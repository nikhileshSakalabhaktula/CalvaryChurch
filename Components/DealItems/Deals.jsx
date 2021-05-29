import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, Animated } from 'react-native';
import DealItem from './DealItem';

const { width } = Dimensions.get('window');
const height = width * 0.6;

const Deals = ({ data }) => {
    
    if (data && data.length) {
        return (
            <View style={{marginTop: 10, width, height: height+50}}>
                <ScrollView
                    // pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    // onScroll={change}
                    // style={{width}}
                >
                    {
                        data.map((item, index) => <DealItem key={index} item={item} />)
                    }
                </ScrollView>
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    
})

export default Deals;