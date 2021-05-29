import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from "react-native";
import Animated from "react-native-reanimated";

const SearchBar = (props) => {
    const [enteredText, changeText] = useState('');
    return (
        <View style={styles.searchBarContainer}>
            <TextInput
                style={styles.searchBar}
                value={enteredText}
                placeholder = 'Search for Products'
                onChange={(event) => changeText(event.target.value)}
                // onFocus={() => console.log('clicked')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        width: '100%',
        // height: 40,
    },
    searchBar: {
        height: 40,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 1,
        paddingLeft: 5,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5
    }
});

export default SearchBar;