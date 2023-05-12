import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ProductCar, ProductTop } from "../../utils/types";
import StarIcon from "react-native-heroicons/outline/StarIcon";
import { SpringPage } from "../../services/spring";
import Button from "../../components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { text } from "../../default_styles";
import { theme } from "../../styled_themes/themes";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { API_URL } from "../../services";

type Props = {
  prod: ProductTop;
};

const TopCard = ({ prod }: Props) => {
  const [catModal, setCatModal] = useState(false);
  const [selectedAno, setSelectedAno] = useState("");
  const [cat, setCat] = useState<SpringPage<ProductCar>>();
  const navigation = useNavigation<any>();

  useEffect(() => {
    axios
      .get(
        `${API_URL}/productscar/buscarcategoria?productId=${prod.productId}&size=15`
      )
      .then((resp) => {
        const data = resp.data;
        setCat(data);
      });
  }, [prod.productId]);

  return (
    <>
      <TouchableOpacity
        className="bg-white mr-3 shadow"
        onPress={() => setCatModal(!catModal)}
      >
        <Image
          source={{ uri: prod.urlImg }}
          className="h-28 mt-4 w-36 rounded-sm"
        />
        <View className="px-3 pb-4">
          <Image
            source={{ uri: prod.logo }}
            className="mt-4 h-6 w-23 rounded-sm"
          />
          <View className="flex-row items-center space-x-1 mt-2">
            <StarIcon color="#FF9C41" opacity={0.5} size={22} />
            <Text className="text-xs text-gray-500">
              <Text className="text-black-700">{prod.code}</Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>

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
            <View className="mt-1">
              <Text
                className="text-white p-2 text-base text-center"
                style={text.footnote}
              >
                Selecione uma categoria
              </Text>
            </View>
            {Platform.OS === "android" ? (
              <Picker
                selectedValue={selectedAno}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedAno(itemValue)
                }
                itemStyle={{
                  color: "#000",
                  fontSize: 14,
                  fontWeight: "700",
                }}
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  alignItems: "center",
                  width: "70%",
                  height: "20%",
                  position: "relative",
                  backgroundColor: "#FFF",
                  marginBottom: 10,
                }}
                dropdownIconColor="#000"
              >
                <Picker.Item label="Selecione a categoria" value="" />
                {cat?.content.map((m) => {
                  return (
                    <Picker.Item
                      label={`${m.categoryName}`}
                      value={m.categoryId}
                      key={m.id}
                    />
                  );
                })}
              </Picker>
            ) : (
              <Picker
                selectedValue={selectedAno}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedAno(itemValue)
                }
                itemStyle={{
                  color: "#FFF",
                  fontSize: 12,
                  fontWeight: "700",
                }}
                style={{ color: "#FFF", height: 150, marginBottom:10 }}
              >
                <Picker.Item label="Selecione o Ano" value="" />
                {cat?.content.map((m) => {
                  return (
                    <Picker.Item
                      label={`${m.categoryName}`}
                      value={m.categoryId}
                      key={m.id}
                    />
                  );
                })}
              </Picker>
            )}

            {selectedAno !== "" ? (
              <View className="mt-2 w-[50%] self-center">
                <Button
                  title="Buscar"
                  background={theme.colors.background.secondary}
                  onPress={() =>
                    navigation.navigate("Produto", {
                      selectedCategory: selectedAno,
                    })
                  }
                />
              </View>
            ) : (
              <View className="mt-2 w-[50%] self-center">
                <Button
                  title="Buscar"
                  background={theme.colors.background.secondary}
                  onPress={() => {}}
                />
              </View>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default TopCard;

const styles = StyleSheet.create({});
