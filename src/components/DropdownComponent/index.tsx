import { FlatList, TouchableOpacity, View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { SpringPage } from "../../services/spring";
import { Category } from "../../utils/types";
import { API_URL, fetchCategory } from "../../services";



const DropdownComponent = () => {
  const [cat, setCat] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("");
  const [clicked, setClicked] = useState(false);

  const getData = async () => {
    const resp = await fetch(`${API_URL}/categoriesproducts}`);
    const cat = await resp.json();
    setCat(cat);

  };

  useEffect(() => {
    getData;
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={{
          width: "90%",
          height: 50,
          borderRadius: 10,
          borderWidth: 0.5,
          alignSelf: "center",
          marginTop: 100,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 15,
          paddingRight: 15,
        }}
        onPress={() => {
          setClicked(!clicked);
        }}
      >
        <Text style={{ fontWeight: "600", color: "#FFF" }}>
          {selectedCategory == "" ? "Select Country" : selectedCategory}
        </Text>
        {clicked ? (
          <Image
            source={require("../../assets/images/upload.png")}
            style={{ width: 20, height: 20 }}
          />
        ) : (
          <Image
            source={require("../../assets/images/dropdown.png")}
            style={{ width: 20, height: 20 }}
          />
        )}
      </TouchableOpacity>
      {clicked ? (
        <View
          style={{
            elevation: 5,
            marginTop: 20,
            height: 300,
            alignSelf: "center",
            width: "90%",
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
        >
          <FlatList
            data={cat}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: "85%",
                    alignSelf: "center",
                    height: 50,
                    justifyContent: "center",
                    borderBottomWidth: 0.5,
                    borderColor: "#8e8e8e",
                  }}
                  onPress={() => {
                    setSelectedCategory(item.categoria.name);
                    setClicked(!clicked);
                  }}
                >
                  <Text style={{ fontWeight: "600" }}>{item.country}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};
export default DropdownComponent;
