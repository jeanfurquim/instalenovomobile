import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  minModelCar,
  minModelPageAno,
  minModeloCarAno,
} from "../../utils/types";
import { FlatList } from "react-native-gesture-handler";
import { Image } from "react-native";
import { text } from "../../default_styles";
import { API_URL } from "../../services";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import { theme } from "../../styled_themes/themes";

type Props = {
  modelCar: minModelCar;
};

const ModelCard = ({ modelCar }: Props) => {
  const [ano, setAno] = useState<minModelPageAno>({
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
  const [selectedAno, setSelectedAno] = useState("");
  const [catModal, setCatModal] = useState(false);
  const navigation = useNavigation<any>();

  useEffect(() => {
    axios
      .get(
        `${API_URL}/productscar/modelano?productId=${modelCar.productId}&categoryId=${modelCar.categoryId}&name=${modelCar.name}&size=1000`
      )
      .then((resp) => {
        const data = resp.data;
        setAno(data);
      });
  }, [modelCar.name]);

  return (
    <TouchableOpacity
      className="mt-4 ml-4 justify-center items-center self-center w-40 bg-white shadow-lg"
      style={{ elevation: 10 }}
      activeOpacity={0.7}
      onPress={() => setCatModal(!catModal)}
    >
      <View className="flex-row justify-center self-center items-center mt-2 w-24">
        <Image
          source={{
            uri: "http://www.instalesoft.com.br/imagens/icons/icon-car.png",
          }}
          className="w-10 h-10"
        />
        <Text className="ml-1 text-xs text-center" style={text.headline}>
          {modelCar.name}
        </Text>
      </View>
      <View
        style={{
          marginBottom: 3,
          borderColor: "#db6401",
          borderWidth: 1,
          marginTop: 5,
        }}
      >
        <Text className="p-1 text-center text-xs" style={text.footnote}>
          De: {modelCar.de} - Até: {modelCar.ate}
        </Text>
      </View>

      <View className="mt-2">
        <View className="flex-row justify-center items-center self-center">
          <Image source={{ uri: modelCar.image }} className="w-9 h-9" />
          <Text className="text-xs ml-1" style={text.headline}>
            {modelCar.montadora}
          </Text>
        </View>
      </View>
      <View
        className=" mt-2 mb-4 rounded-full"
        style={{ backgroundColor: "#db6401" }}
      >
        <Text className="text-sm text-white p-3" style={text.headline}>
          Ver Produtos
        </Text>
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
            <View className="mt-1">
              <Text
                className="text-white p-2 text-base text-center"
                style={text.footnote}
              >
                Selecione a montadora
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
                <Picker.Item label="Selecione o Ano" value="" />
                {ano?.content.map((m) => {
                  return (
                    <Picker.Item label={`${m.ano}`} value={m.mid} key={m.mid} />
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
                style={{ color: "#FFF", height: 150 }}
              >
                <Picker.Item label="Selecione o Ano" value="" />
                {ano?.content.map((m) => {
                  return (
                    <Picker.Item label={`${m.ano}`} value={m.mid} key={m.mid} />
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
                    navigation.navigate("Categorias", {
                      selectedAno,
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
    </TouchableOpacity>
  );
};

export default ModelCard;

const styles = StyleSheet.create({});
