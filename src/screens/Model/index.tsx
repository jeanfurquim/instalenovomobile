import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { cores, text } from "../../default_styles";
import { Products, minModelCar, minModelPage } from "../../utils/types";
import axios, { AxiosRequestConfig } from "axios";
import { API_URL, requestBackend } from "../../services";
import ModelCard from "../../components/ModelCard";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { Picker } from "@react-native-picker/picker";
import { Platform } from "react-native";
import SearchInput from "../../components/SearchInput";

type Props = {
  route: {
    params: { productId: any; categoryId: any };
  };
  modelProps: minModelCar;
};

const Model = ({ route }: Props) => {
  const { productId, categoryId } = route.params;
  const [modelo, setModelo] = useState([]);
  const [prod, setProd] = useState<Products>();
  const perPage = 999;
  const [catModal, setCatModal] = useState(false);
  const [catModalName, setCatModalName] = useState(false);
  const [selectedMontadora, setSelectedMontadora] =
    useState("Todas montadoras");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState<minModelPage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 999,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  async function listModels() {
    const res = await axios.get(
      `${API_URL}/productscar/carporcat?productId=${productId}&categoryId=${categoryId}&size=${perPage}`
    );
    setModelo(res.data.content);
  }

  useEffect(() => {
    listModels();
  }, [categoryId, productId]);

  async function listFilter() {
    const res = await axios.get(
      `${API_URL}/productscar/params?montadora=${selectedMontadora}&productId=${productId}&categoryId=${categoryId}&size=${perPage}`
    );
    setModelo(res.data.content);
  }

  useEffect(() => {
    listFilter();
  }, [selectedMontadora]);

  async function listFilterName() {
    const res = await axios.get(
      `${API_URL}/productscar/params?name=${search}&productId=${productId}&categoryId=${categoryId}&size=${perPage}`
    );
    setModelo(res.data.content);
  }

  useEffect(() => {
    listFilterName();
  }, [search]);

  useEffect(() => {
    axios.get(`${API_URL}/products/${productId}`).then((resp) => {
      const data = resp.data;
      setProd(data);
    });
  }, [productId]);

  const getMan = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/productscar/carporcatmontadora`,
      params: {
        page: 0,
        size: 999,
        productId: productId,
        categoryId: categoryId,
      },
    };
    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [productId, categoryId]);

  useEffect(() => {
    getMan();
  }, [getMan]);

  const navigation = useNavigation<any>();

  return (
    <>
      <SafeAreaView className="flex-1">
        <ImageBackground
          source={require("../../assets/images/fundo3.jpg")}
          className="p-0 w-full h-full"
        >
          <View
            style={{
              backgroundColor: "#0f0f0f",

              padding: 3,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginBottom: 2,
                marginTop: 4,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="w-8 h-8 ml-2 justify-center self-center rounded-full"
                style={{ backgroundColor: cores.secondary }}
              >
                <ArrowLeftIcon color="white" size={32} />
              </TouchableOpacity>
              <View className=" w-full mt-2">
                <Text
                  className="text-white text-lg py-2 w-3/4 text-center "
                  style={text.headline}
                >
                  Produto: {prod?.name}
                </Text>
              </View>
            </View>
          </View>
          <View
            className="p-2 flex-row justify-between"
            style={{ backgroundColor: "#0f0f0f" }}
          >
            <View className="justify-center ml-2">
              <Text className="text-white" style={text.headline}>
                Filtre por:
              </Text>
            </View>
            <View>
              <TouchableOpacity
                className="bg-white mr-3 shadow  rounded-full"
                style={{ backgroundColor: "#db6401" }}
                onPress={() => setCatModal(!catModal)}
              >
                <View className="p-1 justify-center items-center w-24">
                  <Text
                    className="text-white text-[11px] p-1"
                    style={text.carousel}
                  >
                    Montadora
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                className="bg-white mr-3 shadow  rounded-full"
                style={{ backgroundColor: "#db6401" }}
                onPress={() => setCatModalName(!catModalName)}
              >
                <View className="p-1 justify-center items-center w-24">
                  <Text
                    className="text-white text-[11px] p-1"
                    style={text.carousel}
                  >
                    Modelos
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            contentContainerStyle={{
              paddingBottom: 100,
              justifyContent: "center",
              alignSelf: "center",
              paddingRight: 4,
            }}
            data={modelo}
            numColumns={2}
            initialNumToRender={12}
            renderItem={({ item }) => (
              <View className="justify-center self-center items-center">
                <ModelCard modelCar={item} />
              </View>
            )}
          />
        </ImageBackground>
        <Modal animationType="slide" transparent={true} visible={catModal}>
          <View className="flex-1">
            <View
              style={{
                backgroundColor: "#0F0F0F",
                width: "100%",
                height: "50%",
                position: "absolute",
                bottom: 0,
              }}
            >
              <TouchableOpacity onPress={() => setCatModal(!catModal)}>
                <View className="w-10 h-10 justify-center self-center items-center mb-1 mt-2 rounded-full bg-black">
                  <MaterialIcons name="close" size={36} color="white" />
                </View>
              </TouchableOpacity>
              <View className="mt-1">
                <Text
                  className="text-white p-2 text-base text-center"
                  style={text.footnote}
                >
                  Selecione a montadora
                </Text>
              </View>
              {Platform.OS === "android" ? (
                <Picker
                  selectedValue={selectedMontadora}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedMontadora(itemValue)
                  }
                  itemStyle={{
                    color: "#FFF",
                    fontSize: 14,
                    fontWeight: "700",
                  }}
                  style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                    width: "70%",
                    height: "20%",
                    position: "relative",
                    backgroundColor: "#FFF",
                    marginBottom: 10,
                  }}
                  dropdownIconColor="#000"
                >
                  <Picker.Item label="Todas montadoras" value="" />
                  {page?.content.map((man) => {
                    return (
                      <Picker.Item
                        label={`${man.montadora}`}
                        value={man.montadora}
                        key={man.mid}
                      />
                    );
                  })}
                </Picker>
              ) : (
                <Picker
                  selectedValue={selectedMontadora}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedMontadora(itemValue)
                  }
                  itemStyle={{
                    color: "#FFF",
                    fontSize: 12,
                    fontWeight: "700",
                  }}
                  style={{ color: "#FFF", height: 150 }}
                >
                  <Picker.Item label="Todas montadoras" value="" />
                  {page?.content.map((man) => {
                    const { mid, montadora } = man;
                    return (
                      <Picker.Item
                        label={`${montadora}`}
                        value={montadora}
                        key={mid}
                      />
                    );
                  })}
                </Picker>
              )}
            </View>
          </View>
        </Modal>
        <Modal animationType="slide" transparent={true} visible={catModalName}>
          <View className="flex-1">
            <View
              style={{
                backgroundColor: "#0F0F0F",
                width: "100%",
                height: "35%",
                position: "absolute",
                bottom: 0,
              }}
            >
              <TouchableOpacity onPress={() => setCatModalName(!catModalName)}>
                <View className="w-10 h-10 justify-center self-center items-center mb-1 mt-2 rounded-full bg-black">
                  <MaterialIcons name="close" size={22} color="white" />
                </View>
              </TouchableOpacity>
              <View className="flex-row justify-around items-center p-1">
                <View className="w-[70%]">
                  <SearchInput
                    placeholder="Nome do modelo"
                    search={search}
                    setSearch={setSearch}
                  />
                </View>
                <TouchableOpacity onPress={() => setSearch("")}>
                  <View>
                    <Text className="text-white text-lg" style={text.headline}>
                      Limpar
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default Model;

const styles = StyleSheet.create({});
