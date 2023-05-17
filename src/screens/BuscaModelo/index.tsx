import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import { cores, text } from "../../default_styles";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { Manufacturer, Model, minModelCarAno } from "../../utils/types";
import { SpringPage } from "../../services/spring";
import { useNavigation } from "@react-navigation/native";
import { API_URL, fetchManuf } from "../../services";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/Button";
import { theme } from "../../styled_themes/themes";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { Feather } from "@expo/vector-icons";

const BuscaModelo = () => {
  const navigation = useNavigation<any>();
  const [manu, setManu] = useState<SpringPage<Manufacturer>>();
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [mod, setMod] = useState<SpringPage<Model>>();
  const [selectedModel, setSelectedModel] = useState("");
  const [ano, setAno] = useState<minModelCarAno>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 100,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });
  const [catYear, setCatYear] = useState<SpringPage<Model>>();
  const [selectedYear, setSelectedYear] = useState("");
  const { navigate } = useNavigation<Nav>();
  type Nav = {
    navigate: (value: string) => void;
  };

  const fetchM = () => {
    fetchManuf().then((response) => setManu(response.data));
  };

  useEffect(() => {
    fetchM();
  }, [selectedManufacturer]);

  const fetchModel = () => {
    axios
      .get(`${API_URL}/models/mobile?manufacturer_id=${selectedManufacturer}`)
      .then((res) => setMod(res.data));
  };

  useEffect(() => {
    fetchModel();
  }, [selectedManufacturer]);

  const fetchYear = () => {
    axios
      .get(`${API_URL}/models/mobileyear?name=${selectedModel}`)
      .then((resp) => setAno(resp.data));
  };

  useEffect(() => {
    fetchYear();
  }, [selectedModel]);

  const findMidCar = () => {
    axios
      .get(`${API_URL}/models/whats?name=${selectedModel}&year=${selectedYear}`)

      .then((resp) => {
        const data = resp.data;
        setCatYear(data);
      });
  };

  useEffect(() => {
    findMidCar();
  }, [selectedYear]);

  if (Platform.OS === "ios") {
    return (
      <>
        <SafeAreaView
          className="pt-0"
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            height: "100%",
          }}
        >
          <ImageBackground
            source={require("../../assets/images/fundo3.jpg")}
            className="p-0 w-full h-full"
          >
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
              <View className="flex-row items-center mb-2 ml-4">
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

              <View className="p-1">
                <View className=" justify-center m-4">
                  <View
                    style={{
                      backgroundColor: "#0f0f0f",
                      borderWidth: 1.0,
                      borderColor: "#FFF",
                    }}
                    className="w-[90%]  rounded-2xl px-4 justify-center self-center"
                  >
                    <View>
                      <Text
                        className="text-white p-2 mt-4  text-lg text-center"
                        style={text.footnote}
                      >
                        Selecione o modelo
                      </Text>
                      <Text
                        className="text-white p-2 mt-4  text-sm text-center"
                        style={text.footnote}
                      >
                        (Role as opções)
                      </Text>
                    </View>
                    <View>
                      <View className="">
                        <Picker
                          selectedValue={selectedManufacturer}
                          onValueChange={(itemValue, itemIndex) =>
                            setSelectedManufacturer(itemValue)
                          }
                          itemStyle={{
                            color: "#FFF",
                            fontSize: 16,
                            fontWeight: "700",
                            height: 90,
                            width: "100%",
                          }}
                          style={{ color: "#FFF" }}
                        >
                          <Picker.Item label="Escolha uma montadora" value="" />
                          {manu?.content.map((c) => {
                            return (
                              <Picker.Item
                                label={`${c.name}`}
                                value={c.id}
                                key={c.id}
                              />
                            );
                          })}
                        </Picker>
                      </View>
                      <View>
                        <Picker
                          selectedValue={selectedModel}
                          onValueChange={(itemValue, itemIndex) =>
                            setSelectedModel(itemValue)
                          }
                          itemStyle={{
                            color: "#FFF",
                            fontSize: 16,
                            fontWeight: "700",
                            height: 90,
                            width: "100%",
                          }}
                          style={{ color: "#FFF" }}
                        >
                          <Picker.Item label="Escolha o modelo" value="" />
                          {mod?.content.map((c) => {
                            return (
                              <Picker.Item
                                label={`${c.name}`}
                                value={c.name}
                                key={c.mid}
                              />
                            );
                          })}
                        </Picker>
                      </View>
                      <View className="mb-0">
                        <Picker
                          selectedValue={selectedYear}
                          onValueChange={(itemValue, itemIndex) =>
                            setSelectedYear(itemValue)
                          }
                          itemStyle={{
                            color: "#FFF",
                            fontSize: 16,
                            fontWeight: "700",
                            height: 70,
                            width: "100%",
                          }}
                          style={{ color: "#FFF" }}
                        >
                          <Picker.Item label="Qual ano?" value="" />
                          {ano?.content.map((c) => {
                            return (
                              <Picker.Item
                                label={`${c.year}`}
                                value={c.year}
                                key={c.mid}
                              />
                            );
                          })}
                        </Picker>
                      </View>

                      {selectedYear !== "" ? (
                        <View className="mt-2 mb-6">
                          <Button
                            title="Buscar"
                            background={theme.colors.background.secondary}
                            onPress={() =>
                              navigation.navigate("Categorias", {
                                selectedAno: catYear?.content.map((c) => c.mid),
                              })
                            }
                          />
                        </View>
                      ) : (
                        <View className="mt-2 mb-6">
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
                  onPress={() => navigate("Buscar Produto")}
                  activeOpacity={0.6}
                >
                  <Text
                    className="text-white text-center mr-2 text-sm"
                    style={text.headline}
                  >
                    Busque também por
                  </Text>
                  <Feather name="box" size={36} color="#FFF" />
                  <Text
                    className="text-white text-center mr-2 ml-1 text-sm"
                    style={text.headline}
                  >
                    Produtos
                  </Text>
                </TouchableOpacity>
              </View>
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
            justifyContent: "center",
            alignContent: "center",
            height: "100%",
          }}
        >
          <ImageBackground
            source={require("../../assets/images/backteste2.jpg")}
            className="p-0 w-full h-full"
          >
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
              <View className="flex-row items-center mb-0 ml-4">
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

              <View className="p-1">
                <View className=" justify-center m-4">
                  <View
                    style={{
                      backgroundColor: "#0f0f0f",
                      borderWidth: 1.0,
                      borderColor: "#FFF",
                    }}
                    className="w-[100%]  rounded-2xl px-4 justify-center self-center"
                  >
                    <View>
                      <Text
                        className="text-white p-2 mt-4  text-base text-center"
                        style={text.footnote}
                      >
                        Selecione o modelo
                      </Text>
                    </View>
                    <View>
                      <View className="">
                        <Picker
                          selectedValue={selectedManufacturer}
                          onValueChange={(itemValue, itemIndex) =>
                            setSelectedManufacturer(itemValue)
                          }
                          itemStyle={{
                            color: "#FFF",
                            fontSize: 16,
                            fontWeight: "700",
                            height: 90,
                            width: "100%",
                          }}
                          style={{ color: "#FFF" }}
                        >
                          <Picker.Item
                            label="Escolha uma montadora"
                            value=""
                            style={{ fontSize: 16 }}
                          />
                          {manu?.content.map((c) => {
                            return (
                              <Picker.Item
                                label={`${c.name}`}
                                value={c.id}
                                key={c.id}
                              />
                            );
                          })}
                        </Picker>
                      </View>
                      <View>
                        <Picker
                          selectedValue={selectedModel}
                          onValueChange={(itemValue, itemIndex) =>
                            setSelectedModel(itemValue)
                          }
                          itemStyle={{
                            color: "#FFF",
                            fontSize: 16,
                            fontWeight: "700",
                            height: 90,
                            width: "100%",
                          }}
                          style={{ color: "#FFF" }}
                        >
                          <Picker.Item label="Escolha o modelo" value="" />
                          {mod?.content.map((c) => {
                            return (
                              <Picker.Item
                                label={`${c.name}`}
                                value={c.name}
                                key={c.mid}
                              />
                            );
                          })}
                        </Picker>
                      </View>
                      <View className="mb-8">
                        <Picker
                          selectedValue={selectedYear}
                          onValueChange={(itemValue, itemIndex) =>
                            setSelectedYear(itemValue)
                          }
                          itemStyle={{
                            color: "#FFF",
                            fontSize: 16,
                            fontWeight: "700",
                            height: 90,
                            width: "100%",
                          }}
                          style={{ color: "#FFF" }}
                        >
                          <Picker.Item label="Qual ano?" value="" />
                          {ano?.content.map((c) => {
                            return (
                              <Picker.Item
                                label={`${c.year}`}
                                value={c.year}
                                key={c.mid}
                              />
                            );
                          })}
                        </Picker>
                      </View>

                      {selectedYear !== "" ? (
                        <View className="mt-1 mb-4 w-28 self-center">
                          <Button
                            title="Buscar"
                            background={theme.colors.background.secondary}
                            onPress={() =>
                              navigation.navigate("Categorias", {
                                selectedAno: catYear?.content.map((c) => c.mid),
                              })
                            }
                          />
                        </View>
                      ) : (
                        <View className="mt-1 mb-4 w-28 self-center">
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
                  onPress={() => navigate("Buscar Produto")}
                  activeOpacity={0.6}
                >
                  <Text
                    className="text-white text-center mr-2 text-sm"
                    style={text.headline}
                  >
                    Busque também por
                  </Text>
                  <Feather name="box" size={36} color="#FFF" />
                  <Text
                    className="text-white text-center mr-2 ml-1 text-sm"
                    style={text.headline}
                  >
                    Produtos
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
        </SafeAreaView>
        <Footer />
      </>
    );
  }
};

export default BuscaModelo;

const styles = StyleSheet.create({});
