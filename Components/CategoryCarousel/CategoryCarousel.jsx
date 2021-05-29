import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, Animated } from 'react-native';
import CategoryCarouselItem from './CategoryCarouselItem';
// import CarouselItem from './CarouselItem';

const { width } = Dimensions.get('window');
const height = width * 0.6;

const CategoryCarousel = ({ data }) => {

    if (data && data.length) {
        return (
            <View style={{marginTop: 10, width, height: height/1.5}}>
                <ScrollView
                    // pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    // onScroll={change}
                    // style={{width}}
                >
                    {
                        data.map((item, index) => (
                            // <Image
                            //     key={index}
                            //     source={{uri: item.url}}
                            //     style={styles.image}
                            // />
                            <CategoryCarouselItem key={index} item={item} />
                        ))
                    }
                </ScrollView>
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height:100,
        borderRadius:50,
        margin:20,
    }
})

export default CategoryCarousel;