import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import { Category, minProductPage } from "../../utils/types";
import axios from "axios";
import { API_URL } from "../../services";
import ProductCard from "../../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import CategoryCarousel from "../../components/CategoryCarousel";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import CategoryCarouselCard from "../../components/CategoryCarouselCard";
import { SpringPage } from "../../services/spring";
import { text } from "../../default_styles";

const Produto = ({
  route: {
    params: { selectedCategory },
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
        `${API_URL}/productscar/prodporcat?categoryId=${selectedCategory}&size=100`
      )
      .then((resp) => {
        const data = resp.data as minProductPage;
        setPage(data);
      });
  }, [selectedCategory]);

  const [category, setCategory] = useState<Category>();
  useEffect(() => {
    axios
      .get(`${API_URL}/categoriesproducts/${selectedCategory}`)
      .then((resp) => {
        const data = resp.data;
        setCategory(data);
      });
  }, [selectedCategory]);

  const [cat, setCat] = useState<SpringPage<Category>>();
  useEffect(() => {
    axios.get(`${API_URL}/categoriesproducts/`).then((resp) => {
      const data = resp.data;
      setCat(data);
    });
  }, [selectedCategory]);

  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../../assets/images/backteste2.jpg")}
        className="p-0 w-full h-full"
      >
        <View className="mt-4">
          <View
            className="flex-row justify-between items-center"
            style={{ backgroundColor: "#0F0F0F" }}
          >
            <Text className="text-lg text-white px-4 p-2" style={text.footnote}>
              Outras categorias
            </Text>

            <ArrowRightIcon color="#FFF" size={24} />
          </View>

          <ScrollView
            horizontal
            contentContainerStyle={{
              paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-2"
          >
            {/* Categorias*/}
            {cat?.content.map((c) => (
              <View key={c.id}>
                {c.id !== selectedCategory ? (
                  <CategoryCarouselCard
                    categ={{
                      id: c.id,
                      name: c.name,
                      image: c.image,
                    }}
                  />
                ) : null}
              </View>
            ))}
          </ScrollView>
        </View>
        <View className="mt-4">
          <Text className="text-white">{category?.name}</Text>
        </View>
        <ScrollView contentContainerStyle={{ marginTop: 16 }}>
          {page?.content.map((prod) => (
            <ProductCard prod={prod} key={prod.productId} />
          ))}
        </ScrollView>
      </ImageBackground>
      <Footer />
    </SafeAreaView>
  );
};

export default Produto;
