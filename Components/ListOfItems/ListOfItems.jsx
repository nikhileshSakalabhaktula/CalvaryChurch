import React, {useEffect, useState} from "react";
import { StyleSheet, ScrollView, Dimensions, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
    textState, 
    charCountState
} from "../../recoil/categoryRecoil";
import { useRecoilState } from "recoil";
import ItemDetails from './ItemDetails';
import {dressesAccordingToCategories} from '../../data/dressesAccordingToCategory';


const { width } = Dimensions.get('window');
const height = width * 0.6;
const ListOfItems = ({route, navigation}) => {
    const {data} = route;
    
    console.log('selected category is: ', category);
    const [dresses, setDresses] = useState([]);
    const [category, setCategory] = useRecoilState(textState);
    useEffect(() => {
      let dresses = dressesAccordingToCategories.filter((val) => val.category === category)[0];
      setDresses(dresses ? dresses?.items: []);
      console.log('ddresses are: ', dresses ? dresses?.items: []);
    },[category]);
    return (
        <ScrollView style={styles.containerView}>
          {dresses ? dresses.map((val,ind) => <ItemDetails item={val} key={ind} />):null}
        </ScrollView>
    )
}

export default ListOfItems;

const styles = StyleSheet.create({
  containerView:{
      display: 'flex',
      marginTop: 10,
      flexWrap: 'wrap',
      flexDirection: 'row' ,
      // justifyContent: 'center'
  },
  imageGridView: {
      width: width/3,
      height: width/3,
      margin: 10
  }
})