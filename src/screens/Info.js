import { 
  StyleSheet, 
  Dimensions,
  ScrollView,
  View, 
  Image } from "react-native";
import React, {useEffect, useState} from 'react';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const Info = ({route, navigation}) => {
  const {image} = route.params;

  return (
    <View style={appStyle.homeView}>
      <ScrollView>
        <Image style={appStyle.welcomeImage} source={image} />
      </ScrollView>
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
  welcomeImage: {
    width: windowWidth,
    height: windowHeight * 1.2,
    resizeMode: 'cover',
  },
});

export default Info;