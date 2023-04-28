import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { minProductCarCat } from "../../utils/types";
import { text } from "../../default_styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  prod: minProductCarCat;
};

const ProductCard = ({ prod }: Props) => {
  const { navigate } = useNavigation<Nav>();
  type Nav = {
    navigate: (value: string) => void;
  };

  const handlePress = (prod: minProductCarCat) => {
    navigate("Produtos Detalhes", { prod });
  };


  return (
    <TouchableOpacity
      className="bg-white shadow flex-row mb-0 mt-2 justify-around "
      activeOpacity={0.7}
      onPress={() => handlePress(prod)}
    >
      <Image
        source={{ uri: prod.image }}
        className="h-24 w-32 rounded-sm mb-2 mt-2"
      />
      <View className="px-3 pb-4 items-center">
        <Text className="text-xl pt-2" style={text.title1}>
          {prod.name}
        </Text>
        <View className="flex-row items-center space-x-1">
          <Text className="text-base text-center">{prod.code}</Text>
        </View>
        <View
          className="items-center space-x-1 rounded-lg mt-2"
          style={{ backgroundColor: "#db6401" }}
        >
          <Text className="text-lg text-white px-3 py-1">+ Informações</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
