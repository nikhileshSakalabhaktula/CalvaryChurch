import React from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from "react-native";
// import {StatusBar} from "expo-status-bar";
import Colors from "../../constants/standardColors";
import {useSelector, useDispatch} from "react-redux";
import LottieView from 'lottie-react-native';
import {sampleAction} from "../../redux/actions";
import {useNavigation} from '@react-navigation/native';

const OpeningComponent = (props) => {
    const sampleReducer = useSelector(state => state.sampleReducer);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    console.log('navigation is: ', navigation);
    console.log('props are: ', props);
    setTimeout(() => navigation.replace('Home'), 5000);
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                style="auto"
                // backgroundColor='#4f6d7a'
                backgroundColor={Colors.lottieSplash}
            />
            <LottieView
                source={require('../../assets/splash.json')}
                autoPlay
                loop={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lottieSplash,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default OpeningComponent;