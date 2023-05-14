import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Category } from "../../utils/types";
import { text } from "../../default_styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  categ: Category;
};

const CategoryCarouselCard = ({ categ }: Props) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow  rounded-full"
      style={{ backgroundColor: "#db6401" }}
      onPress={() =>
        navigation.navigate("Produto", { selectedCategory: categ.id })
      }
    >
      <View className="p-1 justify-center items-center">
        <Text className="text-white text-[11px] p-2" style={text.carousel}>
          {categ.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCarouselCard;

const styles = StyleSheet.create({});
