import { StyleSheet, SafeAreaView, Text, View, ImageBackground, ScrollView } from "react-native";
import React from "react";
import BottomTabs from "../../components/BottomTabs";
import Footer from "../../components/Footer";
import { theme } from "../Buscar/styles";
import BuscarProd from "../../components/BuscarProd";
import { cores, temas, text } from "../../default_styles";
import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/outline";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PickerProd from "../../components/PickerProd";
import DropdownComponent from "../../components/DropdownComponent";

const BuscaProduto = () => {
  return (
    <>
      <SafeAreaView className="pt-0" style={theme.containerBuscarProd}>
        <ImageBackground
        source={require("../../assets/images/backteste2.jpg")}
        className="p-0 w-full h-full"
        >
        <View className="flex-row flex-1 items-center mb-4 ml-4">
          <View
            className="w-7 h-7 items-center justify-center mt-4 rounded-full"
            style={{ backgroundColor: cores.secondary }}
          >
            <ArrowLeftIcon color="white" />
          </View>

          <Text
            className="text-white ml-4 text-[18px] mt-4"
            style={text.headline}
          >
            Voltar
          </Text>
        </View>

        

        <ScrollView className="p-1">
          <View className="justify-center items-center">
          <BuscarProd />
          </View>
          <View className="mt-4 flex-row justify-center items-center mb-2" style={{backgroundColor:'#0F0F0F'}}>
            <Text className="text-white text-center mr-2 text-sm" style={text.headline}> Busque também por</Text>
            <MaterialCommunityIcons name="car-hatchback" size={36} color="#FFF" />
          </View>
        </ScrollView>
        </ImageBackground>
       
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default BuscaProduto;

const styles = StyleSheet.create({});
