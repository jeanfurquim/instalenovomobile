import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  Modal,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { cores, text } from "../../default_styles";
import Footer from "../Footer";
import { minProductCarCat } from "../../utils/types";
import Button from "../../components/Button";
import { theme } from "../../styled_themes/themes";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

type Props = {
  route: {
    params: { prod: minProductCarCat };
  };
};

const ProductDetails = ({ route }: Props) => {
  const { width, height } = Dimensions.get("window");
  const [catModal, setCatModal] = useState(false);

  const { navigate } = useNavigation<Nav>();
  type Nav = {
    navigate: (value: string) => void;
  };

  const SIZES = {
    // app dimensions
    width,
    height,
  };
  const { prod } = route.params;
  return (
    <>
      <SafeAreaView>
        <ImageBackground
          source={require("../../assets/images/backteste2.jpg")}
          className="p-0 w-full h-full"
        >
          <View className="bg-white">
            <View
              className="w-8 h-8 items-center justify-center mt-2 ml-2 rounded-full"
              style={{ backgroundColor: cores.secondary }}
            >
              <ArrowLeftIcon color="white" />
            </View>
          </View>

          <View className="bg-white w-full h-2/5 items-center">
            <Image
              source={{ uri: prod.image }}
              className="w-full h-4/5"
              resizeMode="contain"
            />

            <Image source={{ uri: prod.logo }} className="w-28 h-8" />
          </View>
          <View className="bg-white"></View>
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 0,
              paddingBottom: 50,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-0"
          >
            <View
              className="mt-4 w-full justify-center self-center"
              style={{ backgroundColor: "#0F0F0F" }}
            >
              <View className="px-4">
                <View className="flex-row mt-1">
                  <Text className="text-gray-300 text-xl" style={text.footnote}>
                    Produto:
                  </Text>
                  <Text
                    className="text-white text-xl mb-2 ml-3"
                    style={text.headline}
                  >
                    {prod.name}
                  </Text>
                </View>
                <View className="flex-row mt-1">
                  <Text className="text-gray-300 text-xl" style={text.footnote}>
                    Código:
                  </Text>
                  <Text
                    className="text-white text-xl ml-3"
                    style={text.headline}
                  >
                    {prod.code}
                  </Text>
                </View>
              </View>
              <View className=" flex-row items-center self-center mt-8 w-[70%]">
                <View className="mb-6">
                  <Button
                    title="Inf. Técnicas"
                    background={theme.colors.background.secondary}
                    onPress={() => setCatModal(!catModal)}
                  />
                </View>
                <View className="ml-4 mb-6">
                  <Button
                    title="Modelos Compatíveis"
                    background={theme.colors.background.secondary}
                  />
                </View>
              </View>
            </View>
            <Modal animationType="slide" transparent={true} visible={catModal}>
              <View
                style={{
                  flex: 1,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FFF",
                    width: "100%",
                    height: "40%",
                    position: "absolute",
                    bottom: 0,
      
                  }}
                >
                  <TouchableOpacity onPress={() => setCatModal(!catModal)}>
                    <View className="mb-5">
                      <Text>Fechar</Text>
                    </View>
                  </TouchableOpacity>

                  <ScrollView
                   contentContainerStyle={{
                    paddingHorizontal: 0,
                    paddingBottom: 50,
                  }}
                  showsHorizontalScrollIndicator={false}
                  >
                    <Text>{prod.description}</Text>
                  </ScrollView>
                </View>
              </View>
            </Modal>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
