import React from 'react';
import {Button, ScrollView, StatusBar, StyleSheet, Text, View} from "react-native";
import Colors from "../../constants/standardColors";
import {useSelector, useDispatch} from "react-redux";
import {sampleAction} from "../../redux/actions";
import {connect} from 'react-redux';
import SearchBar from "../SearchBar/SearchBar";
import Carousel from "../Carousel/Carousel";
import CategoryCarousel from '../CategoryCarousel/CategoryCarousel';
import {dummyData} from "../../data/dataForCarousel";
import Deals from '../DealItems/Deals';
import ProductGridView from '../ProductGridView/ProductGridView';

const MainComponent = ({navigation}) => {
    const sampleReducer = useSelector(state => state.sampleReducer);
    const dispatch = useDispatch();
    // console.log('navigation is: ', navigation);
    // navigation.navigate('listOfItems',{data:'123'});
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                style="auto"
                // backgroundColor='#4f6d7a'
                backgroundColor={Colors.primary}
            />

            <ScrollView style={styles.scrollViewContainer}>
                <Carousel data={dummyData} />
                <CategoryCarousel data={dummyData}/>
                <Deals data={dummyData}/>
                <ProductGridView data={dummyData}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center'
    },
    scrollViewContainer: {
        marginTop: 10,
        marginBottom: 10
    }
});

export default MainComponent;