import { Text, SafeAreaView, ScrollView, ImageBackground } from "react-native";
import React from "react";
import { theme } from "./styles";
import { text } from "../../default_styles";
import BuscarCard from "../../components/BuscarCard";
import Footer from "../../components/Footer";

const Buscar = () => {
  return (
    <SafeAreaView className="pt-0" style={theme.container}>
      <ImageBackground
        source={require("../../assets/images/fundo3.jpg")}
        className="p-0 w-full h-full"
      >
        <Text className="text-white text-2xl px-4 mt-3" style={text.headline}>
          Buscar
        </Text>
        <ScrollView className="p-3">
          <BuscarCard />
        </ScrollView>
      </ImageBackground>
      <Footer />
    </SafeAreaView>
  );
};

export default Buscar;
