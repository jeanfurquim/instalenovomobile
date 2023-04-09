import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { theme } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Suporte = () => {
  const { navigate } = useNavigation<Nav>();
  type Nav = {
    navigate: (value: string) => void;
  };

  return (
    <View style={theme.container}>
      <TouchableOpacity onPress={() => navigate("BuscaProduto")}>
        <View style={theme.containerSuporte}>
          <Text className="text-white">Suporte</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Suporte;


