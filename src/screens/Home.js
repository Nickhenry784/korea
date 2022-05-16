import { 
  View, 
  StyleSheet, 
  TouchableOpacity,
  Text, Dimensions, 
  ImageBackground, 
  Image,
  ScrollView, 
  Alert  } from "react-native";
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {decrement} from '../redux/pointSlice';
import {useDispatch, useSelector} from 'react-redux';
import { images } from "../assets";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const dataButton = [{id: 1, background: images.background}, {id: 2,  background: images.clothesbaby}, {id: 3,  background: images.babysleep}, {id: 4, background: images.camera}, {id: 5, background: images.sleep2}];

const Home = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const points = useSelector(state => state.points);
  const dispatch = useDispatch();

  useEffect(() => {

  }, [index])

  const onClickStartButton = () => {
    if (points.value === 0 && index === 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    
    if(index === dataButton.length - 1){
      setIndex(0);
      return false;
    }
    if(index === 0){
   dispatch(decrement());
    }
    setIndex(index + 1)
  }


  const onClickTurnButton = () => {
    navigation.navigate("BUY");
  }


  return ( dataButton[index].id === 1 ?
      <ImageBackground style={appStyle.homeView} source={dataButton[index].background}>
        <View style={appStyle.appBar}>
          <Text style={appStyle.turnText}>{`View ${points.value}`}</Text>
          <TouchableOpacity onPress={onClickTurnButton}>
            <Image source={images.shoppingicon} style={appStyle.scoreStyle} />
          </TouchableOpacity>
        </View>
        <Image source={images.frame} style={appStyle.welcomeImage}/>

      <TouchableOpacity onPress={onClickStartButton} style={appStyle.bottomButton}>
          <Image source={images.buttonnext} style={appStyle.successImage} />
      </TouchableOpacity>
    </ImageBackground> : 
    <View style={appStyle.homeView}>
      <ScrollView>
        <Image style={appStyle.scrollImage} source={dataButton[index].background} />
      </ScrollView>
      <TouchableOpacity onPress={onClickStartButton} style={appStyle.bottomButton}>
          <Image source={images.buttonnext} style={appStyle.successImage} />
      </TouchableOpacity>
  </View>
  );
};


export const appStyle = StyleSheet.create({
  homeView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    resizeMode: 'cover',
  },
  appBar: {
    flex: 0.1,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  turnView: {
    width: windowWidth * 0.15,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeImage: {
    width: windowWidth * 0.8,
    height: windowWidth > 640 ? windowHeight * 0.1 : windowHeight * 0.08,
    resizeMode: 'cover',
  },
  scrollImage: {
    width: windowWidth,
    height: windowHeight * 1.2,
    resizeMode: 'cover',
  },
  successImage: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.1,
    resizeMode: 'contain',
  },
  scoreStyle: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  bottomButton: {
    position: 'absolute',
    bottom: '10%',
  },
  turnText: {
    fontSize: windowWidth > 640 ? 30 : 20,
    color: '#0a98c9',
    fontWeight: 'bold',
  },
});

export default Home;