import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
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
import { CarouselSlide, Dot, DotProd, DotsWrapper } from "../Home/styles";

type Props = {
  route: {
    params: { modelId; categoryId; vc; combo };
  };
};

const carouselSlideWidth = Dimensions.get("window").width;

const ProdCard = ({ route }: Props) => {
  const navigation = useNavigation<any>();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselRef, setCarouselRef] = useState<ScrollView | null>(null);
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
        `${API_URL}/productscar/prodcategv?modelId=${modelId}&categoryId=${categoryId}&vc=${vc}&size=10`
      )
      .then((response) => {
        const data = response.data as ProductPage;
        setProduct(data);
      });
  }, [modelId, categoryId]);

  function handleCarouselSlide() {
    if (carouselIndex < product.size - 1) {
      const nextIndex = carouselIndex + 1;

      carouselRef?.scrollTo({
        x: nextIndex * carouselSlideWidth,
      });
      setCarouselIndex(nextIndex);
    }
  }

  function handleCarouselSlideDot(index: number) {
    carouselRef?.scrollTo({
      x: index * carouselSlideWidth,
    });
    setCarouselIndex(index);
  }

  return (
    <>
      <SafeAreaView className="flex-1">
        <ImageBackground
          source={require("../../assets/images/backteste2.jpg")}
          className="p-0 w-full h-full"
        >
          <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 0,
                marginTop: 10,
              }}
            >
              {product.totalElements > 1 ? (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  className="w-8 h-8 ml-4 justify-center self-center rounded-full"
                  style={{ backgroundColor: cores.secondary }}
                >
                  <ArrowLeftIcon color="white" size={32} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  className="w-8 h-8 mb-5 ml-4 justify-center self-center rounded-full"
                  style={{ backgroundColor: cores.secondary }}
                >
                  <ArrowLeftIcon color="white" size={32} />
                </TouchableOpacity>
              )}
            </View>

            {product.totalElements > 1 ? (
              <DotsWrapper className="items-center self-center mb-3">
                {product.totalElements > 0 ? (
                  <DotProd
                    active={carouselIndex == 0}
                    onPress={() => handleCarouselSlideDot(0)}
                  />
                ) : null}

                {product.totalElements > 1 ? (
                  <DotProd
                    active={carouselIndex == 1}
                    onPress={() => handleCarouselSlideDot(1)}
                  />
                ) : null}
                {product.totalElements > 2 ? (
                  <DotProd
                    active={carouselIndex == 2}
                    onPress={() => handleCarouselSlideDot(2)}
                  />
                ) : null}
                {product.totalElements > 3 ? (
                  <DotProd
                    active={carouselIndex == 3}
                    onPress={() => handleCarouselSlideDot(3)}
                  />
                ) : null}
                {product.totalElements > 4 ? (
                  <DotProd
                    active={carouselIndex == 4}
                    onPress={() => handleCarouselSlideDot(4)}
                  />
                ) : null}
                {product.totalElements > 5 ? (
                  <DotProd
                    active={carouselIndex == 5}
                    onPress={() => handleCarouselSlideDot(5)}
                  />
                ) : null}
                {product.totalElements > 6 ? (
                  <DotProd
                    active={carouselIndex == 6}
                    onPress={() => handleCarouselSlideDot(6)}
                  />
                ) : null}
              </DotsWrapper>
            ) : null}
            {product.totalElements > 1 ? (
              <View className="bg-black justify-center self-center items-center w-[80%]">
                <Text
                  className=" text-white font-bold mb-1"
                  style={text.footnote}
                >
                  Deslize a tela para o lado
                </Text>
              </View>
            ) : null}

            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              ref={(ref) => setCarouselRef(ref)}
              onMomentumScrollEnd={(event) => {
                const index = Math.round(
                  event.nativeEvent.contentOffset.x / carouselSlideWidth
                );
                setCarouselIndex(index);
              }}
            >
              {product?.content.map((item) => {
                return (
                  <CarouselSlide key={item.id} width={carouselSlideWidth}>
                    <ProductCarCard prodCar={item} />
                  </CarouselSlide>
                );
              })}
            </ScrollView>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default ProdCard;

const styles = StyleSheet.create({});
