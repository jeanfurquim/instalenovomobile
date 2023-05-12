import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import BottomTabs from "../../components/BottomTabs";
import Footer from "../../components/Footer";

import BuscarProd from "../../components/BuscarProd";
import { cores, temas, text } from "../../default_styles";
import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/outline";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PickerProd from "../../components/PickerProd";
import DropdownComponent from "../../components/DropdownComponent";
import { Category, Products } from "../../utils/types";
import { SpringPage } from "../../services/spring";
import { useNavigation } from "@react-navigation/native";
import { fetchCategory } from "../../services";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/Button";
import { theme } from "../../styled_themes/themes";

const BuscaProduto = () => {
  const navigation = useNavigation<any>();
  const [cat, setCat] = useState<SpringPage<Category>>();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const { navigate } = useNavigation<Nav>();
  type Nav = {
    navigate: (value: string) => void;
  };

  useEffect(() => {
    fetchCategory().then((category) => {
      setCat(category);
    });
  }, []);

  if (Platform.OS === "ios") {
    return (
      <>
        <SafeAreaView
          className="pt-0"
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <ImageBackground
            source={require("../../assets/images/backteste2.jpg")}
            className="p-0 w-full h-full"
          >
            <View className="flex-row flex-1 items-center mb-4 ml-4">
              <TouchableOpacity onPress={() => navigate("Buscar")}>
                <View
                  className="w-7 h-7 items-center justify-center mt-4 rounded-full"
                  style={{ backgroundColor: cores.secondary }}
                >
                  <ArrowLeftIcon color="white" />
                </View>
              </TouchableOpacity>

              <Text
                className="text-white ml-4 text-[18px] mt-4"
                style={text.headline}
              >
                Voltar
              </Text>
            </View>

            <ScrollView className="p-1">
              <View className="justify-center items-center">
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#0f0f0f",
                    borderWidth: 1.0,
                    borderColor: "#FFF",
                  }}
                  className="w-[95%] h-[100%]  rounded-2xl px-4 justify-center"
                >
                  <View>
                    <Text
                      className="text-white p-2 mt-4  text-2xl text-center"
                      style={text.footnote}
                    >
                      Produtos compatíveis com os modelos
                    </Text>
                  </View>
                  <View>
                    <Picker
                      selectedValue={selectedCategory}
                      onValueChange={(itemValue, itemIndex) =>
                        setSelectedCategory(itemValue)
                      }
                      itemStyle={{
                        color: "#FFF",
                        fontSize: 14,
                        fontWeight: "700",
                      }}
                      style={{ color: "#FFF", height: 150 }}
                    >
                      <Picker.Item label="Escolha uma categoria" value="" />
                      {cat?.content.map((c) => {
                        return (
                          <Picker.Item
                            label={`${c.name}`}
                            value={c.id}
                            key={c.id}
                          />
                        );
                      })}
                    </Picker>
                    {selectedCategory !== "" ? (
                      <View className="mt-10 mb-10">
                        <Button
                          title="Buscar"
                          background={theme.colors.background.secondary}
                          onPress={() =>
                            navigation.navigate("Produto", { selectedCategory })
                          }
                        />
                      </View>
                    ) : (
                      <View className="mt-10 mb-6">
                        <Button
                          title="Buscar"
                          background={theme.colors.background.secondary}
                          onPress={() => {}}
                        />
                      </View>
                    )}
                  </View>
                </View>
              </View>
              <TouchableOpacity
                className="mt-4 flex-row justify-center items-center mb-2"
                style={{ backgroundColor: "#0F0F0F" }}
                onPress={() => navigate("Buscar Modelo")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-white text-center mr-2 text-sm"
                  style={text.headline}
                >
                  Busque também por
                </Text>
                <MaterialCommunityIcons
                  name="car-hatchback"
                  size={36}
                  color="#FFF"
                />
              </TouchableOpacity>
            </ScrollView>
          </ImageBackground>
        </SafeAreaView>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <SafeAreaView
          className="pt-0"
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <ImageBackground
            source={require("../../assets/images/backteste2.jpg")}
            className="p-0 w-full h-full"
          >
            <View className="flex-row flex-1 items-center mb-4 ml-4">
              <TouchableOpacity onPress={() => navigate("Buscar")}>
                <View
                  className="w-7 h-7 items-center justify-center mt-4 rounded-full"
                  style={{ backgroundColor: cores.secondary }}
                >
                  <ArrowLeftIcon color="white" />
                </View>
              </TouchableOpacity>

              <Text
                className="text-white ml-4 text-[18px] mt-4"
                style={text.headline}
              >
                Voltar
              </Text>
            </View>

            <ScrollView className="p-1">
              <View className="justify-center items-center">
                <View
                  style={{
                    backgroundColor: "#0f0f0f",
                    borderWidth: 1.0,
                    borderColor: "#FFF",
                  }}
                  className="w-[80%] h-64  rounded-2xl px-4 justify-center"
                >
                  <View>
                    <Text
                      className="text-white p-4 mt-6 text-base text-center"
                      style={text.footnote}
                    >
                      Produtos compatíveis com os modelos
                    </Text>
                  </View>
                  <View>
                    <Picker
                      selectedValue={selectedCategory}
                      onValueChange={(itemValue) =>
                        setSelectedCategory(itemValue)
                      }
                      style={{
                        justifyContent: "center",
                        alignSelf: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "40%",
                        position: "relative",
                        backgroundColor: "#000",
                        marginBottom: 10,
                      }}
                      dropdownIconColor="#FFF"
                    >
                      <Picker.Item
                        label="Escolha uma categoria"
                        value=""
                        style={{
                          backgroundColor: "#000",
                          color: "#FFF",
                          fontSize: 12,
                          fontWeight: "700",
                        }}
                      />
                      {cat?.content.map((c) => {
                        return (
                          <Picker.Item
                            label={`${c.name}`}
                            value={c.id}
                            key={c.id}
                            style={{
                              backgroundColor: "#000",
                              color: "#FFF",
                              fontSize: 12,
                              fontWeight: "700",
                            }}
                          />
                        );
                      })}
                    </Picker>
                    {selectedCategory !== "" ? (
                      <View className="mt-1 mb-4">
                        <Button
                          onPress={() =>
                            navigation.navigate("Produto", { selectedCategory })
                          }
                          title="Buscar"
                          background={theme.colors.background.secondary}
                        />
                      </View>
                    ) : (
                      <View className="mt-1 mb-4">
                        <Button
                          onPress={() => {}}
                          title="Buscar"
                          background={theme.colors.background.secondary}
                        />
                      </View>
                    )}
                  </View>
                </View>
              </View>
              <TouchableOpacity
                className="mt-4 flex-row justify-center items-center mb-2"
                style={{ backgroundColor: "#0F0F0F" }}
                onPress={() => navigate("Buscar Modelo")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-white text-center mr-2 text-sm"
                  style={text.headline}
                >
                  {" "}
                  Busque também por
                </Text>
                <MaterialCommunityIcons
                  name="car-hatchback"
                  size={36}
                  color="#FFF"
                />
              </TouchableOpacity>
            </ScrollView>
          </ImageBackground>
        </SafeAreaView>
        <Footer />
      </>
    );
  }
};

export default BuscaProduto;

const styles = StyleSheet.create({});
