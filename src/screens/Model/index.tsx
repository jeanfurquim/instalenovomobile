import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { cores, text } from "../../default_styles";
import {
  ProductCar,
  Products,
  minModelCar,
  minModelPage,
  minProductCarCat,
  minProductPage,
} from "../../utils/types";
import { SpringPage } from "../../services/spring";
import axios from "axios";
import { API_URL } from "../../services";
import ModelCard from "../../components/ModelCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

type Props = {
  route: {
    params: { productId; categoryId };
  };
  modelProps: minModelCar;
};

const Model = ({ route }: Props) => {
  const { productId, categoryId } = route.params;
  const [modelo, setModelo] = useState([]);
  const [prod, setProd] = useState<Products>();
  const perPage = 200;

  async function listModels() {
    const res = await axios.get(
      `${API_URL}/productscar/carporcat?productId=${productId}&categoryId=${categoryId}&size=${perPage}`
    );
    setModelo(res.data.content);
  }

  useEffect(() => {
    listModels();
  }, [categoryId, productId]);

  useEffect(() => {
    axios.get(`${API_URL}/products/${productId}`).then((resp) => {
      const data = resp.data;
      setProd(data);
    });
  }, [productId]);

  const navigation = useNavigation<any>();

  return (
    <>
      <SafeAreaView className="flex-1">
        <ImageBackground
          source={require("../../assets/images/backteste2.jpg")}
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
          <View className="p-2 flex-row justify-between" style={{ backgroundColor: "#0f0f0f" }}>
         
            <View className="justify-center ml-2">
              <Text className="text-white" style={text.headline}>Filtre por: </Text>
            </View>
            <View>
              <TouchableOpacity
                className="bg-white mr-3 shadow  rounded-full"
                style={{ backgroundColor: "#db6401" }}
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


          <FlatList contentContainerStyle={{paddingBottom:100, justifyContent:"center", alignSelf:"center", paddingRight:4}}
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
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default Model;

const styles = StyleSheet.create({});
