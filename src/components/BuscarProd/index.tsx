import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Category, Products } from "../../utils/types";
import { SpringPage } from "../../services/spring";
import { API_URL, fetchCategory } from "../../services";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { text } from "../../default_styles";
import { theme } from "../../styled_themes/themes";
import Button from "../../components/Button";

interface CategoryProps{
  id:Number;
  name:String;
  image:String
}

const BuscarProd = ({id, name, image}:CategoryProps) => {
  

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

  const handlePress = (prod: Products) => {
    navigate("Produtos");
  };


  if (Platform.OS === "ios") {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#0f0f0f",
          borderWidth: 1.0,
          borderColor: "#FFF",
        }}
        className="w-[95%] h-[100%]  rounded-2xl px-4 justify-center"
      >
        <View>
          <Text
            className="text-white p-2 mt-4  text-2xl text-center"
            style={text.footnote}
          >
            Produtos compatíveis com os modelos
          </Text>
        </View>
        <View>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCategory(itemValue)
            }
            itemStyle={{color:'#FFF', fontSize:16, fontWeight:"700"}}
            style={{color:'#FFF', height:150}}
          >
            <Picker.Item label="Escolha uma categoria" value="categoria" />
            {cat?.content.map((c) => {
              return (
                <Picker.Item
                  label={`${c.name}`}
                  value={c.id}
                  key={c.id}
           
                />
              );
            })}
          </Picker>
          <View className="mt-10 mb-4" >
            <Button
              title="Buscar"
              background={theme.colors.background.secondary}
              onPress={() =>navigate('Produto')}
            />
          </View>
        </View>
      </View>
    );
  } else {
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
              marginBottom: 10,
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
                    fontWeight: "700",
                  }}
                />
              );
            })}
          </Picker>
          <View className="mt-2">
            <Button
              title="Buscar"
              background={theme.colors.background.secondary}
              onPress={() =>handlePress}
            />
          </View>
        </View>
      </View>
    );
  }
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
  itemStyle: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 13,
    marginTop: 10,
    height: 30,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
