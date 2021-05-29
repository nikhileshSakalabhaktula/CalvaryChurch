import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, Animated } from 'react-native';
import CarouselItem from './CarouselItem';

const { width } = Dimensions.get('window');
const height = width * 0.6;

const Carousel = ({ data }) => {
    
    const [activeDot, setActiveDot] = useState(0);

    // useEffect(()=> {
        
    // })

    const change = ({nativeEvent}) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        setActiveDot(slide);
    }


    if (data && data.length) {
        return (
            <View style={{width, height: height+50}}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onScroll={change}
                    style={{width}}
                >
                    {
                        data.map((item, index) => (
                            // <Image
                            //     key={index}
                            //     source={{uri: item.url}}
                            //     style={{width}}
                            // />
                            <CarouselItem key={index} item={item} />
                        ))
                    }
                </ScrollView>
                <View style={styles.dotContainer}>
                    {
                        data.map((img, ind) => (
                            <Text key={`dot${ind}`} style={activeDot === ind ? styles.bigDot : styles.dot}>•</Text>
                        ))
                    }
                </View>
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    },
    dot: {
        color: 'white',
        margin:3,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    bigDot: {
        color: 'white',
        fontSize: 30,
        margin:3,
        justifyContent: 'center',
        alignSelf: 'center',
    }
})

export default Carousel;