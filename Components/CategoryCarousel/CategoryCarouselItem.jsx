import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { 
    useRecoilState, 
    useRecoilValue 
} from "recoil";
import {
    textState,
    charCountState
} from '../../recoil/categoryRecoil';

const { width, height } = Dimensions.get('window');


const CategoryCarousel = ({ item }) => {
    const navigation = useNavigation();
    const [category, setCategory] = useRecoilState(textState);
    // console.log('selected state is: ', category);
    return (
        <TouchableOpacity 
            style={styles.cardView}
            onPress={(e) => {navigation.navigate('listOfItems'), setCategory(item.title)}}
        >
            <Image style={styles.image} source={{ uri: item.url }} />
            <View style={styles.textView}>
                <Text style={styles.itemTitle}> {item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: height/6,
        height: height/6,
        margin: 0,
        elevation: 5,
        alignItems: 'center'
    },

    textView: {
        textAlign: 'center',
        alignItems: 'center',
        width: height/6
    },
    image: {
        width: height / 8,
        height: height / 8,
        marginTop:10,
        borderRadius: 80
    },
    itemTitle: {
        color: 'white',
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5,
        textAlign:'center'
    }
})

export default CategoryCarousel