import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import { Category, minProductPage } from "../../utils/types";
import axios from "axios";
import { API_URL } from "../../services";
import ProductCard from "../../components/ProductCard";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import CategoryCarouselCard from "../../components/CategoryCarouselCard";
import { SpringPage } from "../../services/spring";
import { text } from "../../default_styles";
import ProductTopCard from "../../components/ProductTopCard";

const ProdutoTop = ({
  route: {
    params: { selectedCategory, productId },
  },
}) => {
  const [page, setPage] = useState<minProductPage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 50,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(
        `${API_URL}/productscar/prodporcattop?categoryId=${selectedCategory}&productId=${productId}`
      )
      .then((resp) => {
        const data = resp.data as minProductPage;
        setPage(data);
      });
  }, [selectedCategory, productId]);

  return (
    <>
      <SafeAreaView className="flex-1">
        <ImageBackground
          source={require("../../assets/images/fundo3.jpg")}
          className="p-0 w-full h-full"
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: 0,
              marginTop: 10,
            }}
          >
            {page?.content.map((prod) => (
              <ProductTopCard prod={prod} key={prod.productId} />
            ))}
          </View>
        </ImageBackground>
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default ProdutoTop;
