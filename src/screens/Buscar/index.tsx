import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import { theme } from "./styles";
import { text } from "../../default_styles";
import BuscarCard from "../../components/BuscarCard";
import Footer from "../../components/Footer";

const Buscar = () => {
  return (
    <SafeAreaView className="pt-8" style={theme.container}>
      <Text className="text-white text-2xl px-4 mt-2" style={text.headline}>
        Buscar
      </Text>
      <ScrollView className="p-3">
    
          <BuscarCard />
   
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default Buscar;
