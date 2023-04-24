import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { Category } from "../../utils/types";
import { SpringPage } from "../../services/spring";
import axios from "axios";
import { API_URL, fetchCategory } from "../../services";
import ArrowRightIcon from "react-native-heroicons/outline/ArrowRightIcon";
import CategoryCarouselCard from "../CategoryCarouselCard";

const CategoryCarousel = () => {
  const [category, setCategory] = useState<SpringPage<Category>>();

  useEffect(() => {
    fetchCategory().then((category) => {
      setCategory(category);
    });
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <ArrowRightIcon color="#FFF" size={36} />
      </View>
      <Text className="text-xs text-white px-4">Pesquise outra categoria</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Categorias*/}
        {category?.content.map((c) => (
          <View>
            
            <CategoryCarouselCard
              key={c.id}
              categ={{
                id: c.id,
                name: c.name,
                image: c.image,
                
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryCarousel;

const styles = StyleSheet.create({});
