import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ProductCar, ProductPage } from "../../utils/types";
import { text } from "../../default_styles";
import {
  MaterialIcons,
  Entypo,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";

import Button from "../Button";
import { theme } from "../../styled_themes/themes";
import axios from "axios";
import { API_URL } from "../../services";

type Props = {
  prodCar: ProductCar;
};

const ProductCarCard = ({ prodCar }: Props) => {
  const [catModal, setCatModal] = useState(false);
  const [catModalAlerta, setCatModalAlerta] = useState(false);
  const [comb, setCombo] = useState<ProductPage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 1,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: false,
  });
  useEffect(() => {
    axios
      .get(
        `${API_URL}/productscar/prodcategcombo?modelId=${
          prodCar.modelId
        }&categoryId=${prodCar.categoryId}&combo=${prodCar.combo + 1}`
      )
      .then((response) => {
        const data = response.data as ProductPage;
        setCombo(data);
      });
  }, [prodCar.categoryId, prodCar.modelId, prodCar.combo]);

  return (
    <View className="bg-white justify-center items-center  self-center w-full">
      <View
        style={{
          borderWidth: 1,
          borderColor: "#0F0F0F",
          borderRadius: 15,
          width: "80%",
        }}
        className="mt-5 mb-3 justify-center items-center self-center"
      >
        <View className="mt-3">
          <Image source={{ uri: prodCar.logoUrl }} className="w-[80] h-[25]" />
        </View>
        <View className="mt-3">
          <Image
            source={{ uri: prodCar.productImg }}
            className="w-[110] h-[110]"
          />
        </View>
        <View className="mt-1 mb-2">
          <Text className="text-base text-center" style={text.headline}>
            {prodCar.productName}
          </Text>
        </View>
      </View>

      {prodCar.combo !== null && prodCar.nConvCombo === null ? (
        <View className="mb-4 p-2" style={{backgroundColor:'#ee9f27'}}>
          {comb.content.map((c) => (
            <View key={c.id}>
              <Text className="text-white font-bold"style={text.headline}>Adicionar {c.productName} --></Text>
               
            </View>
          ))}
        </View>
      ) : null}

      <View className="flex-row justify-evenly ">
        {prodCar.manualSec !== "" ? (
          <TouchableOpacity onPress={() => Linking.openURL(prodCar.manualSec)}>
            <View className="items-center self-center pl-2">
              <Entypo name="book" size={24} color="black" />
              <Text className="text-sm mt-1" style={text.footnote}>
                Manual
              </Text>
            </View>
          </TouchableOpacity>
        ) : null}

        {prodCar.diagram !== "" ? (
          <TouchableOpacity onPress={() => Linking.openURL(prodCar.diagram)}>
            <View className="items-center self-center pl-2">
              <FontAwesome5 name="book" size={24} color="black" />
              <Text className="text-sm mt-1" style={text.footnote}>
                Diagrama
              </Text>
            </View>
          </TouchableOpacity>
        ) : null}

        {prodCar.video !== "" ? (
          <TouchableOpacity onPress={() => Linking.openURL(prodCar.video)}>
            <View className="items-center self-center pl-2">
              <AntDesign name="youtube" size={24} color="black" />
              <Text className="text-sm mt-1" style={text.footnote}>
                Video
              </Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>

      {prodCar.categoryId === 1 ||
      prodCar.categoryId === 1 ||
      prodCar.categoryId === 1 ? (
        <View className="mt-2 w-[80%]" style={{ backgroundColor: "#1f1f1f" }}>
          {prodCar.vc > 0 ? (
            <View
              style={{
                borderBottomColor: "#FFF",
                borderBottomWidth: 2,
                marginBottom: 5,
              }}
            >
              <Text className="text-sm text-white text-center mt-2 mb-1">
                {prodCar.vc} Vidro(s) Convencional(is)
              </Text>
            </View>
          ) : null}
          {prodCar.vi > 0 ? (
            <View style={{}}>
              <Text
                className="text-sm text-white text-center mt-2 mb-1"
                style={text.subhead}
              >
                {prodCar.vi} Vidro(s) Inteligente(s)
              </Text>
            </View>
          ) : null}
        </View>
      ) : null}

      {prodCar.observation !== "" ? (
        <View className="w-3/4 mt-6">
          <Button
            title="Importante!!"
            background={theme.colors.background.red}
            onPress={() => setCatModalAlerta(!catModalAlerta)}
          />
        </View>
      ) : null}
      <View className="mt-4 w-9/12 mb-10">
        <Button
          title="+ Informações"
          background={theme.colors.background.secondary}
          onPress={() => setCatModal(!catModal)}
        />
      </View>

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
            <View
              style={{ backgroundColor: "#FFF" }}
              className="justify-center items-center self-center p-2 w-6/12"
            >
              <Text style={text.headline}>Código: {prodCar.productCode}</Text>
              <Text style={text.headline}>Quantidade: {prodCar.quantity}</Text>
            </View>
            <View className="mt-4">
              <Text className="text-white text-center" style={text.headline}>
                Ficha Técnica
              </Text>
            </View>
            <ScrollView
              contentContainerStyle={{ paddingBottom: 50 }}
              className="mt-1 self-center"
            >
              <View className="w-4/5 self-center">
                <Text className="text-white text-base" style={text.body}>
                  {prodCar.complement}
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent={true} visible={catModalAlerta}>
        <View className="flex-1">
          <View
            style={{
              backgroundColor: "#EA0000",
              width: "100%",
              height: "40%",
              position: "absolute",
              bottom: 0,
            }}
          >
            <TouchableOpacity
              onPress={() => setCatModalAlerta(!catModalAlerta)}
            >
              <View className="w-10 h-10 justify-center self-center items-center mb-1 mt-2 rounded-full bg-black">
                <MaterialIcons name="close" size={36} color="white" />
              </View>
            </TouchableOpacity>
            <ScrollView
              contentContainerStyle={{ paddingBottom: 50 }}
              className="mt-1 self-center"
            >
              <Text
                style={text.headline}
                className="text-white text-center text-lg"
              >
                {prodCar.observation}
              </Text>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProductCarCard;

const styles = StyleSheet.create({});
