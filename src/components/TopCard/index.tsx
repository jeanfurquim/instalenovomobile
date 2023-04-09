import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ProductTop } from "../../utils/types";
import StarIcon from "react-native-heroicons/outline/StarIcon";
import MapPinIcon from "react-native-heroicons/outline/MapPinIcon";

type Props = {
  prod: ProductTop;
};

const TopCard = ({ prod }: Props) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={{ uri: prod.urlImg }} className="h-28 mt-4 w-36 rounded-sm" />
      <View className="px-3 pb-4">
        <Image source={{ uri: prod.logo }} className="mt-4 h-6 w-23 rounded-sm" />
        <View className="flex-row items-center space-x-1 mt-2">
          <StarIcon color="#FF9C41" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-black-700">{prod.code}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TopCard;

const styles = StyleSheet.create({});
