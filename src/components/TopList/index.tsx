import { StyleSheet, View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, fetchTopList } from "../../services";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import TopListCard from "../TopListCard";
import { ProductTop } from "../../utils/types";
import { SpringPage } from "../../services/spring";
import { text } from "../../default_styles";
import TopCard from "../TopCard";

const TopList = () => {
  const [list, setList] = useState<SpringPage<ProductTop>>();

  async function loadTopList() {
    const res = await axios.get(`${API_URL}/prodtop`);
    setList(res.data);
  }

  useEffect(() => {
    loadTopList();
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-white text-xl" style={text.headline}>TOP PRODUTOS</Text>
        <ArrowRightIcon color="#FFF" size={36} />
      </View>
      <Text className="text-xs text-white px-4">Os Mais Vendidos</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* TOP PRODUTOS LISTA...*/}
        {list?.content.map((produto) => (
          <TopCard
          key={produto.id}
            prod={{
              id: produto.id,
              productId: produto.productId,
              name: produto.name,
              urlImg: produto.urlImg,
              code:produto.code,
              urlManual: produto.urlManual,
              description: produto.description,
              complement: produto.complement,
              logo: produto.logo,
              ranking: produto.ranking,
            }}
       
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TopList;
