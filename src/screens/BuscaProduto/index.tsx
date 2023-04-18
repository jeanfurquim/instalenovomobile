import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import React from "react";
import BottomTabs from "../../components/BottomTabs";
import Footer from "../../components/Footer";
import { theme } from "../Buscar/styles";
import BuscarProd from "../../components/BuscarProd";
import { cores, temas, text } from "../../default_styles";
import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/outline";

const BuscaProduto = () => {
  return (
    <>
      <SafeAreaView className="pt-2" style={theme.containerBuscarProd}>
        <View className="flex-row items-center mb-10 ml-4">
          <View
            className="w-10 h-10 items-center justify-center mt-4 rounded-full"
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

        

        <View className="justify-center items-center">
          <BuscarProd />
        </View>
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default BuscaProduto;

const styles = StyleSheet.create({});
