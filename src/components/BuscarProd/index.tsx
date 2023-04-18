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

const BuscarProd = () => {
  const [cat, setCat] = useState<SpringPage<Category>>();
  const [selectedCategory, setSelectedCategory] = useState(["categoria"]);
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
      style={{ backgroundColor: "gray" }}
      className="w-[90%] h-[60%] rounded-2xl"
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
            backgroundColor: "white",
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            width: "80%",
          }}
        
        >
          <Picker.Item
            label="Escolha uma Categoria.."
            value="categoria"
            style={{
              backgroundColor: "#263238",
              justifyContent: "center",
              color: "#FFF",
       
            }}
          />
          {cat?.content.map((c) => {
            return (
              <Picker.Item
                label={`${c.name}`}
                value={c.id}
                key={c.id}
                style={{
                  backgroundColor: "#263238",
                  color: "#FFF",
                   fontSize: 12,
                }}
                
              />
            );
          })}
        </Picker>
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
