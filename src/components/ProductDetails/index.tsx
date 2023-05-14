import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { cores, text } from "../../default_styles";
import Footer from "../Footer";
import { ProductCar, minProductCarCat } from "../../utils/types";
import Button from "../../components/Button";
import { theme } from "../../styled_themes/themes";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  route: {
    params: { prod: minProductCarCat };
  };
  car: ProductCar;
};

const ProductDetails = ({ route }: Props) => {
  const [catModal, setCatModal] = useState(false);

  const { navigate } = useNavigation<Nav>();
  type Nav = {
    navigate: (value: string) => void;
  };
  const navigation = useNavigation<any>();

  const { prod } = route.params;

  return (
    <>
      <SafeAreaView>
        <ImageBackground
          source={require("../../assets/images/backteste2.jpg")}
          className="p-0 w-full h-full"
        >
          <View className="bg-white">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View
                className="w-8 h-8 items-center justify-center mt-2 ml-2 rounded-full"
                style={{ backgroundColor: cores.secondary }}
              >
                <ArrowLeftIcon color="white" />
              </View>
            </TouchableOpacity>
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
                  <Text className="text-gray-300 text-lg" style={text.footnote}>
                    Produto:
                  </Text>
                  <Text
                    className="text-white text-lg mb-2 ml-3 w-11/12"
                    style={text.headline}
                  >
                    {prod.name}
                  </Text>
                </View>
                <View className="flex-row mt-1">
                  <Text className="text-gray-300 text-lg" style={text.footnote}>
                    Código:
                  </Text>
                  <Text
                    className="text-white text-lg ml-3"
                    style={text.headline}
                  >
                    {prod.code}
                  </Text>
                </View>
              </View>
              <View className=" flex-row items-center self-center mt-8 w-[90%]">
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
                    onPress={() =>
                      navigation.navigate(
                        "Models",
                        {
                          productId: prod.productId,
                          categoryId: prod.categoryId,
                        },
                        setCatModal(!catModal)
                      )
                    }
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
                    <View className="w-10 h-10 justify-center self-center items-center mb-3 mt-2 rounded-full bg-black">
                      <MaterialIcons name="close" size={36} color="white" />
                    </View>
                  </TouchableOpacity>

                  <ScrollView
                    contentContainerStyle={{
                      paddingHorizontal: 0,
                      paddingBottom: 0,
                    }}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Text
                      className="text-sm text-center p-2"
                      style={text.modal}
                    >
                      {prod.description}
                    </Text>
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
