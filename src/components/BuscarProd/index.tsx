import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Category } from "../../utils/types";
import { SpringPage } from "../../services/spring";
import { API_URL, fetchCategory } from "../../services";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { text } from "../../default_styles";
import { theme } from "../../styled_themes/themes";
import Button from "../../components/Button";

const BuscarProd = () => {
  const [cat, setCat] = useState<SpringPage<Category>>();
  const [selectedCategory, setSelectedCategory] = useState([
    "Escolha uma Categoria ...",
  ]);
  const [isFocus, setIsFocus] = useState(false);

  const { navigate } = useNavigation<Nav>();
  type Nav = {
    navigate: (value: string) => void;
  };
  useEffect(() => {
    fetchCategory().then((category) => {
      setCat(category);
    });
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#0f0f0f",
        borderWidth: 1.0,
        borderColor: "#FFF",
      }}
      className="w-[90%] h-64  rounded-2xl px-4 justify-center"
    >
      <View>
        <Text
          className="text-white p-4 text-base text-center"
          style={text.footnote}
        >
          Produtos compatíveis com os modelos
        </Text>
      </View>
      <View>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          style={{
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            width: "100%",
            height: "40%",
            position: "relative",
            backgroundColor: "#000",
            marginBottom:10
          }}
          dropdownIconColor="#FFF"
        >
          <Picker.Item
            label="Escolha uma Categoria.."
            value="categoria"
            style={{
              backgroundColor: "#000",
              justifyContent: "center",
              color: "#FFF",
              fontSize: 12,
            }}
          />
          {cat?.content.map((c) => {
            return (
              <Picker.Item
                label={`${c.name}`}
                value={c.id}
                key={c.id}
                style={{
                  backgroundColor: "#000",
                  color: "#FFF",
                  fontSize: 12,
                  fontWeight:"700"
                }}
              />
            );
          })}
        </Picker>
        <View className="mt-2">
        <Button
          title="Buscar"
          background={theme.colors.background.secondary}
     
        />
        </View>
      
      </View>
  
    </View>
  );
};

export default BuscarProd;

const styles = StyleSheet.create({
  dropdown: {
    borderColor: "#FFF",
    borderWidth: 0.5,
    borderRadius: 15,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
});
