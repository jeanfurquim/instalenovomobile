import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ProductCar } from "../../utils/types";
import { Image } from "react-native";
import { text } from "../../default_styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "../Button";
import { theme } from "../../styled_themes/themes";

type Props = {
  category: ProductCar;
};

const ModelCard = ({ category }: Props) => {
  const [catModal, setCatModal] = useState(false);
  const navigation = useNavigation<any>();

  return (
    <View
      className="mt-4 mb-4 ml-3 justify-center items-center self-center w-40  bg-white shadow-lg rounded-2xl"
      style={{ elevation: 10 }}
    >
      <View
        className="flex-row justify-center p-1 self-center items-center mt-2"
        style={{
          borderBottomColor: "#0f0f0f",
          borderBottomWidth: 2,
        }}
      >
        <Image
          source={{ uri: category.categoryImage }}
          className="w-[32] h-[32]"
        />
        <View className="w-[120]">
          <Text
            className="ml-1 text-xs text-center text-black"
            style={text.headline}
          >
            {category.categoryName}
          </Text>
        </View>
      </View>
      <View className="mt-2 flex-row">
        <Image
          source={{
            uri: "http://www.instalesoft.com.br/imagens/icons/icon-car.png",
          }}
          className="w-[32] h-[32] self-center"
        />

        <Text
          className="text-xs text-center self-center ml-1"
          style={text.footnote}
        >
          {category.modelName}
        </Text>
        <Text
          className="text-xs text-center self-center ml-1"
          style={text.footnote}
        >
          {category.modelYear}
        </Text>
      </View>
      {category.portaD === null ? (
        <View>
          <View className="mt-2 mb-4 w-[70%]  self-center">
            <Button
              title="Saiba Mais"
              background={theme.colors.background.secondary}
              onPress={() =>
                navigation.navigate("Produtos Car", {
                  modelId: category.modelId,
                  categoryId: category.categoryId,
                  vc: category.vc,
                  combo: category.combo,
                })
              }
            />
          </View>
        </View>
      ) : (
        <View>
          <View className="mt-2 mb-4 w-[70%]  self-center">
            <Button
              title="Saiba Mais"
              background={theme.colors.background.secondary}
              onPress={() => setCatModal(!catModal)}
            />
          </View>
        </View>
      )}

      <Modal animationType="slide" transparent={true} visible={catModal}>
        <View className="flex-1">
          <View
            style={{
              backgroundColor: "#0F0F0F",
              width: "100%",
              height: "38%",
              position: "absolute",
              bottom: 0,
            }}
          >
            <TouchableOpacity onPress={() => setCatModal(!catModal)}>
              <View className="w-10 h-10 justify-center self-center items-center mb-1 mt-2 rounded-full bg-black">
                <MaterialIcons name="close" size={36} color="white" />
              </View>
            </TouchableOpacity>
            <View className="mt-1">
              <Text
                className="text-white p-2 text-base text-center"
                style={text.footnote}
              >
                Escolha uma opção
              </Text>
            </View>
            {category.categoryId !== 5 ? (
              <View className="flex-row justify-between items-center px-6 mt-2">
                <View className="mt-2 mb-4 w-[40%]  self-center">
                  <Button
                    title="2 Vidros"
                    background={theme.colors.background.secondary}
                    onPress={() =>
                      navigation.navigate(
                        "Produtos Car",
                        {
                          modelId: category.modelId,
                          categoryId: category.categoryId,
                          vc: 2,
                          combo: category.combo,
                        },
                        setCatModal(!catModal)
                      )
                    }
                  />
                </View>
                <View className="mt-2 mb-4 w-[40%] self-center">
                  <Button
                    title="4 Vidros"
                    background={theme.colors.background.secondary}
                    onPress={() =>
                      navigation.navigate(
                        "Produtos Car",
                        {
                          modelId: category.modelId,
                          categoryId: category.categoryId,
                          vc: 4,
                          combo: category.combo,
                        },
                        setCatModal(!catModal)
                      )
                    }
                  />
                </View>
              </View>
            ) : (
              <View className="flex-row justify-between items-center px-6 mt-2">
                <View className="mt-2 mb-4 w-[40%]  self-center">
                  <Button
                    title="2 Portas"
                    background={theme.colors.background.secondary}
                    onPress={() =>
                      navigation.navigate(
                        "Produtos Car",
                        {
                          modelId: category.modelId,
                          categoryId: category.categoryId,
                          vc: 2,
                          combo: category.combo,
                        },
                        setCatModal(!catModal)
                      )
                    }
                  />
                </View>
                <View className="mt-2 mb-4 w-[40%] self-center">
                  <Button
                    title="4 Portas"
                    background={theme.colors.background.secondary}
                    onPress={() =>
                      navigation.navigate(
                        "Produtos Car",
                        {
                          modelId: category.modelId,
                          categoryId: category.categoryId,
                          vc: 4,
                          combo: category.combo,
                        },
                        setCatModal(!catModal)
                      )
                    }
                  />
                </View>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModelCard;

const styles = StyleSheet.create({});
