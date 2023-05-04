import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { cores, text } from "../../default_styles";
import { useNavigation } from "@react-navigation/native";
import { ProductCar, ProductPage } from "../../utils/types";
import axios from "axios";
import { API_URL } from "../../services";
import { ScrollView } from "react-native-gesture-handler";
import ProductCarCard from "../../components/ProductCarCard";
import { SpringPage } from "../../services/spring";

type Props = {
  route: {
    params: { modelId; categoryId; vc; combo };
  };
};

const ProdCard = ({ route }: Props) => {
  const navigation = useNavigation<any>();
  const { modelId, categoryId, vc, combo } = route.params;
  const [product, setProduct] = useState<ProductPage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(
        `${API_URL}/productscar/prodcategv?modelId=${modelId}&categoryId=${categoryId}&vc=${vc}&size=1`
      )
      .then((response) => {
        const data = response.data as ProductPage;
        setProduct(data);
      });
  }, [categoryId, modelId]);

  return (
    <>
      <SafeAreaView className="flex-1">
        <ImageBackground
          source={require("../../assets/images/backteste2.jpg")}
          className="p-0 w-full h-full"
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
                Escolha a Categoria
              </Text>
            </View>
          </View>
          {product?.content.map((p) => (
            <ScrollView>
              <ProductCarCard prodCar={p} />
            </ScrollView>
          ))}
        </ImageBackground>
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default ProdCard;

const styles = StyleSheet.create({});
