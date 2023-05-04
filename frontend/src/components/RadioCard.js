import React , {useState,useEffect}from 'react';
import { View, StyleSheet, Image, Text, Dimensions,TouchableOpacity,ToastAndroid } from 'react-native';
import i18n from "i18n-js";
import { useFonts } from "expo-font";
import { useIsFocused } from '@react-navigation/native';
import * as Localization from "expo-localization";
import { useNavigation } from "@react-navigation/native"; // import useNavigation hook
import { fr, en } from "../assets/i18n/supportedLanguages";
import ARROWSVG from '../assets/images/arrow-right.svg';

const RadioCard = ({ image, name, frequency, id, url}) => {
  i18n.fallbacks = true;
  i18n.translations = { en,fr };
  i18n.locale = Localization.locale;
  const isFocused = useIsFocused();
  useEffect(() => {
    const init = async () => {
      i18n.fallbacks = true;
      i18n.translations = { en, fr };    
    };
    init();
  }, [isFocused]);
  const showToastMsg = (msg) => {
    try {
      ToastAndroid.showWithGravityAndOffset(
        msg,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        100,
        100,
      );
    } catch (err) {
      console.log(err);
    }
  };
  const [loaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.otf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.otf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.otf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.otf"),
  });
  if (!loaded) {
    return null;
  }

  return (
  <View style={styles.card}>

    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>{i18n.t('header.frequency')} {frequency}</Text>
      </View>
      <TouchableOpacity  style={{flew:1, flexDirection:'row',justifyContent:'space-between' }}  >
      <Text style={styles.text}>{i18n.t('header.click')} </Text>
      <ARROWSVG/>
    </TouchableOpacity>
    </View>

  </View>


  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingHorizontal: 4,
    marginBottom: 8,
  },
  bookmarkContainer: {
    position: 'relative',
    left: 115,

  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 21,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 12,
    flex: 1,
    justifyContent: 'center',
    flexDirection:'column'
  },
  image: {
    height: 100,
    width: '100%',
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign:'left'
  },
  info: {
    fontSize: 10,
    color: '#404040',
    fontFamily: 'Poppins-Regular',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  text:{
    fontSize: 16,
    color: '#404040',
    fontFamily: 'Poppins-Regular',
    top:5
  }
});

export default RadioCard;
