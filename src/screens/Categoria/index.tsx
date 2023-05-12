import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import Footer from "../../components/Footer";
import { SpringPage } from "../../services/spring";
import { ProductCar } from "../../utils/types";
import { API_URL } from "../../services";
import axios from "axios";
import CategoriaCard from "../../components/CategoriaCard";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { cores, text } from "../../default_styles";

type Props = {
  route: {
    params: { selectedAno };
  };
};

const Categoria = ({ route }: Props) => {
  const [category, setCategory] = useState<ProductCar>();
  const { selectedAno } = route.params;

  const navigation = useNavigation<any>();

  function removeDuplicates(data: any, prop: any) {
    const newArray: any[] = [];
    const lookupObject: any[] = [];

    for (var i in data) {
      lookupObject[data[i][prop]] = data[i];
    }
    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }

  const newData = removeDuplicates(category, "categoryName");

  async function listCategory() {
    const res = await axios.get(
      `${API_URL}/productscar/categcar?modelId=${selectedAno}&size=30`
    );
    setCategory(res.data.content);
  }

  useEffect(() => {
    
    listCategory();
  }, [selectedAno]);

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
          <FlatList
            contentContainerStyle={{
              paddingBottom: 100,
              justifyContent: "center",
              alignSelf: "center",
              paddingRight: 4,
            }}
            data={newData}
            numColumns={2}
            initialNumToRender={20}
            renderItem={({ item }) => (
              <View className="justify-center self-center items-center">
                <CategoriaCard category={item} />
              </View>
            )}
          />
        </ImageBackground>
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default Categoria;

const styles = StyleSheet.create({});
