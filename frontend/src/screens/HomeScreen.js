import React from 'react';
import { StyleSheet, Text, View,useEffect } from 'react-native';
import RadioCard from "../components/RadioCard";
import i18n from "i18n-js";
import { useFonts } from "expo-font";
import { useIsFocused } from '@react-navigation/native';
import * as Localization from "expo-localization";
import { fr, en } from "../assets/i18n/supportedLanguages";
import AudioStreaming from 'react-native-audio-streaming';
const tunisianRadios = [
  { id: '1', name: 'Mosaique FM', frequency: '94.9 FM', image:'../assests/images/radio/radio-mosaique.png',url:'https://radio.mosaiquefm.net/mosalive'},
  { id: '2', name: 'Shems FM', frequency: '101.7 FM', image:'../assests/images/radio/radio-shams.png',url:'https://radio.shemsfm.net/shems'},
  { id: '3', name: 'Jawhara FM', frequency: '102.5 FM', image:'../assests/images/radio/radio-jawhra.jpg',url:'https://streaming2.toutech.net/jawharafm'},
  { id: '4', name: 'Radio IFM', frequency: '100.6 FM', image:'../assests/images/radio/radio-ifm.jpg',url:'https://live.ifm.tn/radio/8000/ifmlive?1585304718' },
  { id: '5', name: 'Zitouna FM', frequency: '102.9 FM', image:'../assests/images/radio/radio-zitouna.jpg',url:'https://stream.radiozitouna.tn/radio/8030/radio.mp3' },
  { id: '6', name: 'Radio Tunisienne', frequency: '96.8 FM', image:'../assests/images/radio/radio-tunis.png',url:'http://rtstream.tanitweb.com/nationale' },
  { id: '7', name: 'Express FM', frequency: '103.6 FM', image:'../assests/images/radio/radio-express.jpg',url:'http://expressfm.ice.infomaniak.ch/expressfm-64.mp3' },
  { id: '8', name: 'KnOOz FM', frequency: '103.6 FM', image:'../assests/images/radio/radio-knooz.png',url:'http://streaming.knoozfm.net:8000/knoozfm' },
  { id: '9', name: 'Radio Sfax', frequency: '93.4 FM', image:'../assests/images/radio/radio-sfax.png' ,url:'http://rtstream.tanitweb.com/sfax'},
  { id: '10', name: 'Sabra FM', frequency: '102.5 FM', image:'../assests/images/radio/radio-sabra.png',url:'https://stream6.tanitweb.com/sabrafm'},
  { id: '11', name: 'Radio Jeune', frequency: '88.8 FM' , image:'../assests/images/radio/radio-jeune.png', url:'http://rtstream.tanitweb.com/jeunes'},
  { id: '12', name: 'Radio RTCI', frequency: '93.4 FM', image:'../assests/images/radio/radio-rtci.png',url:'http://rtstream.tanitweb.com/rtci' },
  { id: '13', name: 'Radio Culture', frequency: '100.8 FM', image:'../assests/images/radio/radio-culture.png',url:'http://rtstream.tanitweb.com/culturelle' },
  { id: '14', name: 'Radio Kef', frequency: '88.2 FM', image:'../assests/images/radio/radio-kef.png' ,url:'http://rtstream.tanitweb.com/kef'},
  { id: '15', name: 'Radio Gafsa', frequency: '105.6 FM', image:'../assests/images/radio/radio-gafsa.png',url:'http://rtstream.tanitweb.com/gafsa' },
  { id: '16', name: 'Radio Monastir', frequency: '106.8 FM', image:'../assests/images/radio/radio-monastir.png',url:'http://rtstream.tanitweb.com/monastir' },
  { id: '17', name: 'Radio Quran', frequency: '94.8 FM', image:'../assests/images/radio/radio-quran.jpg',url:'http://virmach2.hajjam.net:8005/' },
  { id: '18', name: 'Radio Tataouine', frequency: '100.8 FM', image:'../assests/images/radio/radio-tataouine.png',url:'http://rtstream.tanitweb.com/tataouine' },
  { id: '19', name: 'Diwan FM', frequency: '102.5 FM', image:'../assests/images/radio/radio-diwan.png',url:'  https://streaming.diwanfm.net/stream'},
  { id: '20', name: 'Oasis FM', frequency: '96.5 FM', image:'../assests/images/radio/radio-oasis.jpg', url:'http://stream6.tanitweb.com/oasis' },
  { id: '21', name: 'Radio Misk', frequency: '104.4 FM', image:'../assests/images/radio/radio-misk.png',url:'http://51.255.235.173:8000/stream' },
  { id: '22', name: 'Radio Med', frequency: '97.1 FM' , image:'../assests/images/radio/radio-med.png',url:'http://stream6.tanitweb.com/radiomed'},
  { id: '23', name: 'Radio MFM', frequency: '90.2 FM', image:'../assests/images/radio/radio-mfm.png', url:'https://mfmtunisie.toutech.net/mfmlive' },
  { id: '24', name: 'Karama FM', frequency: '90.2 FM', image:'../assests/images/radio/radio-karama.png', url:'https://stream.rcs.revma.com/7hnrkawf4p8uv.mp3' },
  { id: '26', name: 'Oxygene FM', frequency: '90.2 FM', image:'../assests/images/radio/radio-oxygene.png', url:'http://radiooxygenefm.ice.infomaniak.ch/radiooxygenefm-64.mp3' },
  { id: '27', name: 'Radio Orient', frequency: '90.2 FM', image:'../assests/images/radio/radio-orient.png', url:'https://stream.rcs.revma.com/7hnrkawf4p8uv.mp3' },
  { id: '29', name: 'Twenssa FM', frequency: '90.2 FM', image:'../assests/images/radio/radio-twenssa.png', url:'http://197.14.12.137:8000/live' },
  { id: '30', name: 'AlHayat FM', frequency: '90.2 FM', image:'../assests/images/radio/radio-hayet.png', url:'https://manager8.streamradio.fr:2885/stream' },
];  

const HomeScreen = ({navigation}) => {
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
    <View style={styles.container}>
      <View>
        <Text style={styles.recipeTxt}>{i18n.t('header.radio')}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardContainer}>
          {tunisianRadios.map((item) => (
            <RadioCard
              id={item.id}
              name={item.name}
              image={item.image}
              frequency={item.frequency}
              url={item.url}
            />
          ))}
          </View>
      </ScrollView>
      <View style={styles.lottie_container}>
        <AnimatedLoader
          visible={isLoading}
          overlayColor="rgba(255,255,255,255)"
          animationStyle={styles.lottie}
          speed={1}
          source={require("../assets/lottie/loader.json")} // Add here
          onAnimationFinish={() => setIsLoading(false)}
        />
      </View>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  lottie_container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  lottie: {
    width: 300,
    height: 300,
  },
  recipeTxt:{
    width: 250,
    height: 48,
    left: -50,
    fontFamily: "Poppins-SemiBold",
    fontStyle: "normal",
    fontSize: 32,   
    color: "#EA5753",
    marginTop:10,
  },
  noResultImg :{
    marginTop:100
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor:'#FFF'
  },
  searchContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    marginLeft: 5,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    marginLeft:10
  },
  scrollView: {
    width: '100%',
    height:"100%"
  },
  noResults: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
  },
  cardContainer: {

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: 32,

  },
  subTitle:{
    marginTop:10,
    fontFamily:'Poppins-Regular',
    textAlign:'center',
    fontSize:20,
    lineHeight:24,
    width:"70%"
  }
});
