import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Category } from "../../utils/types";
import { SpringPage } from "../../services/spring";
import { fetchCategory } from "../../services";
import { Picker } from "@react-native-picker/picker";
import { text } from "../../default_styles";
import { Alert } from "react-native/Libraries/Alert/Alert";

const PickerProd = () => {
  const [cat, setCat] = useState<SpringPage<Category>>();
  const [selectedCategory, setSelectedCategory] = useState(["categoria"]);
  const [catModal, setCatModal] = useState(false);
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCatModal(!catModal)}
        >
          <Text className="text-white">Categoria</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={catModal}
          onRequestClose={() => {
            Alert.alert("Close");
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFF",
                width: "100%",
                height: "40%",
                position: "absolute",
                bottom: 0,
              }}
            >
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={() => setCatModal(!catModal)}
              >
                <Text>Fechar</Text>
              </TouchableOpacity>
              <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                style={{
                  height: 50,
                  width: "100%",
                }}
              >
                {cat?.content.map((c) => {
                  return (
                    <Picker.Item label={`${c.name}`} value={c.id} key={c.id} />
                  );
                })}
              </Picker>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default PickerProd;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "Orange",
    with: "70%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
});
