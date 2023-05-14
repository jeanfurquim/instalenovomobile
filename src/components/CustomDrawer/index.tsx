import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { text } from "../../default_styles";

const CustomDrawer = (props: any) => {
  return (
    <View className="flex-1">
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#21283F" }}
      >
        <ImageBackground
          source={require("../../assets/images/background.jpg")}
          className="p-5"
        >
          <Image
            source={require("../../assets/images/mascote.png")}
            className="h-20 w-20 rounded-[40px] mb-3 mt-1 ml-4"
          />
          <Text className="text-white font-bold ml-4">Instale Soft</Text>
        </ImageBackground>
      </DrawerContentScrollView>
      <View className="flex-1 bg-white, pt-3 ">
        <DrawerItemList {...props} />
      </View>
      <View
        className="p-5"
        style={{ borderTopWidth: 1, borderTopColor: "#CCC" }}
      >
        <View className="flex-row justify-center items-center">
          <Image
            source={require("../../assets/images/icon.png")}
            className="h-5 w-5 m-2"
          />
          <Text style={text.footnote} className="text-black font-bold text-sm ">
            Soft Eletronica
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
