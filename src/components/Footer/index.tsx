import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Linking,
} from "react-native";
import React from "react";
import { Feather, Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  const { navigate } = useNavigation<Nav>();
  type Nav = {
    navigate: (value: string) => void;
  };

  return (
    <View
      style={Platform.OS === "android" ? styles.container : styles.containerIos}
    >
      <TouchableOpacity
        className="justify-center items-center"
        onPress={() => navigate("Home")}
        activeOpacity={0.6}
      >
        <Entypo name="home" size={22} color="#FFF" />
        <Text className="text-white">Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="justify-center items-center self-center"
        onPress={() => navigate("Buscar")}
        activeOpacity={0.6}
      >
        <Ionicons name="search" size={22} color="#FFF" />
        <Text className="text-white">Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="justify-center items-center self-center"
        onPress={() => navigate("Buscar Modelo")}
        activeOpacity={0.6}
      >
        <FontAwesome name="car" size={22} color="#FFF" />
        <Text className="text-white">Modelos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="justify-center items-center"
        onPress={() => navigate("Buscar Produto")}
        activeOpacity={0.6}
      >
        <Feather name="box" size={22} color="#FFF" />
        <Text className="text-white">Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="justify-center items-center"
        onPress={() => Linking.openURL("https://wa.me/554135448500")}
        activeOpacity={0.6}
      >
        <Ionicons name="logo-whatsapp" size={22} color="#FFF" />
        <Text className="text-white">Suporte</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
