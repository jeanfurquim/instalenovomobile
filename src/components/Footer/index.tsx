import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View className="justify-center items-center">
        <Ionicons name="search" size={22} color="#FFF" />
        <Text className="text-white">Buscar</Text>
      </View>

      <View className="justify-center items-center">
        <Ionicons name="wallet-outline" size={22} color="#FFF" />
        <Text className="text-white">Teste</Text>
      </View>

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
