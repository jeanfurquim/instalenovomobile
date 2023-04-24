import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Category } from "../../utils/types";
import StarIcon from "react-native-heroicons/outline/StarIcon";
import MapPinIcon from "react-native-heroicons/outline/MapPinIcon";
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