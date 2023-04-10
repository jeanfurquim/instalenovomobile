import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  const { navigate } = useNavigation<Nav>();
  type Nav = {
    navigate: (value: string) => void;
  };

  return (
    <View style={styles.container}>
      <View className="justify-center items-center ">
        <Ionicons name="search" size={22} color="#FFF" />
        <Text className="text-white">Buscar</Text>
      </View>

      <TouchableOpacity
        className="justify-center items-center"
        onPress={() => navigate('Home')}
      >
        <Ionicons name="wallet-outline" size={22} color="#FFF" />
        <Text className="text-white">Teste</Text>
      </TouchableOpacity>

      <View>
        <Feather name="bar-chart-2" size={22} color="#FFF" />
        <Text className="text-white">Teste</Text>
      </View>

      <View className="justify-center items-center">
        <Ionicons name="logo-whatsapp" size={22} color="#FFF" />
        <Text className="text-white">Suporte</Text>
      </View>
    </View>
  );
};

export default Footer;
