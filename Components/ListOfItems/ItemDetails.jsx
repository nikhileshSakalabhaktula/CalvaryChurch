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


const ItemDetails = ({ item }) => {
    const navigation = useNavigation();
    const [category, setCategory] = useRecoilState(textState);
    // console.log('selected state is: ', category);
    return (
        <TouchableOpacity>
            <Image
                source={{ uri: item.url }}
                style={styles.imageGridView}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageGridView: {
        width: width/3,
        height: width/3,
        margin: 10
    }
})

export default ItemDetails