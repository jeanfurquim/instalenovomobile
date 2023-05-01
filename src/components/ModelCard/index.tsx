import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { minModelCar } from "../../utils/types";
import { FlatList } from "react-native-gesture-handler";
import { Image } from "react-native";
import { text } from "../../default_styles";

type Props = {
  modelCar: minModelCar;
};

const ModelCard = ({ modelCar }: Props) => {
  return (
    <TouchableOpacity
      className="mt-4 ml-4 justify-center items-center self-center w-40 bg-white shadow-lg"
      style={{ elevation: 10 }}
      activeOpacity={0.7}
    >
      <View className="flex-row justify-center self-center items-center mt-2 w-24">
        <Image
          source={{
            uri: "http://www.instalesoft.com.br/imagens/icons/icon-car.png",
          }}
          className="w-10 h-10"
        />
        <Text className="ml-1 text-xs text-center" style={text.headline}>
          {modelCar.name}
        </Text>
      </View>
      <View
        style={{
          marginBottom: 3,
          borderColor: "#db6401",
          borderWidth: 1,
          marginTop: 5,
        }}
      >
        <Text className="p-1 text-center text-xs" style={text.footnote}>
          De: {modelCar.de} - Até: {modelCar.ate}
        </Text>
      </View>

      <View className="mt-2">
        <View className="flex-row justify-center items-center self-center">
          <Image source={{ uri: modelCar.image }} className="w-9 h-9" />
          <Text className="text-xs ml-1" style={text.headline}>
            {modelCar.montadora}
          </Text>
        </View>
      </View>
      <View
        className=" mt-2 mb-4 rounded-full"
        style={{ backgroundColor: "#db6401" }}
      >
        <Text className="text-sm text-white p-3" style={text.headline}>
          Ver Produtos{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ModelCard;

const styles = StyleSheet.create({});
