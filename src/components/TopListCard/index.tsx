import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ProductTop } from "../../utils/types";
import { text } from "../../default_styles";

type Props = {
  top: ProductTop;
};

const TopListCard = ({ top }: Props) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: top.urlImg }} className="h-20 w-20 rounded" />
      <Image source={{ uri: top.logo }} className="h-5 w-15 rounded" />

    </TouchableOpacity>
  );
};

export default TopListCard;
