import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { cores, text } from "../../default_styles";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import TopList from "../TopList";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    title: "Modelos",
    image: "http://www.instalesoft.com.br/imagens/icons/iconCar.png",
    route: "Buscar Modelo",
  },
  {
    id: "2",
    title: "Produtos",
    image: "http://www.instalesoft.com.br/imagens/produtos/aw533mob.jpg",
    route: "Buscar Produto",
  },
];

const BuscarCard = () => {
  const { navigate } = useNavigation<Nav>();
  type Nav = {
    navigate: (value: string) => void;
  };

  return (
    <>
      <ScrollView className="" contentContainerStyle={{ paddingBottom: 100 }}>
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigate(`${item.route}`)}
              className="p-2 pl-6 items-center mx-4 space-x-2 pb-8 pt-4 bg-white m-2 w-25 rounded-xl"
              activeOpacity={0.9}
            >
              <View>
                <Image
                  style={{
                    width: 90,
                    height: 90,
                    resizeMode: "contain",
                    justifyContent: "center",
                    marginLeft: -5,
                  }}
                  source={{ uri: item.image }}
                />
                <Text style={text.footnote}>{item.title}</Text>
                <View
                  className="w-10 h-10 items-center justify-center mt-4 rounded-full"
                  style={{ backgroundColor: cores.secondary }}
                >
                  <ArrowRightIcon color="white" />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        <View className="mt-2">
          <View style={{ paddingBottom: 10 }}>
            <TopList />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default BuscarCard;
