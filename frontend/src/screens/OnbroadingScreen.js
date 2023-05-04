import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import OnBroadingSVG from "../assets/images/radio-logo.svg";
import * as Localization from "expo-localization";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import i18n from "i18n-js";
import { fr, en } from "../assets/i18n/supportedLanguages";
const OnboardingScreen = ({ navigation }) => {
  i18n.fallbacks = true;
  i18n.translations = { en,fr };
  i18n.locale = Localization.locale;
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
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#F4E6C8",
        height:"100%",
      }}
    >
      <OnBroadingSVG style = {styles.onbroading} />
      <View>
        <Text style={styles.welcome}>{i18n.t('onbroading.welcomeMessage')}</Text>
      </View>
      <LinearGradient
        colors={["#F8972B", "#FA773E","#C15E87"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
          <Text style={[styles.text, {height: 24}]}>{i18n.t('buttons.start')}</Text>
        </TouchableOpacity>
        </LinearGradient>

    </View>
  );
};
// define your styles
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%",
  },
  onbroading: {
    marginBottom:20
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "80%",
    height: 47,
    borderRadius: 15,
    marginBottom: 20,
  },
  text: {
    width: 250,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
  },
  welcome: {
    width: 311,
    color:"#C15E87",
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    fontSize: 36,
    lineHeight: 54,
    textShadowOffset: { width: 0, height: 7 },
    textShadowRadius: 18,
    textShadowColor: '#CC540D',
    marginBottom:20
   
  },
});
export default OnboardingScreen;
