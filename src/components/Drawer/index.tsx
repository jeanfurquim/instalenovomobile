import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

const Drawer = () => {
  const [show, setShow] = useState(false);

  return (
    <TouchableOpacity
      className="mr-3"
      activeOpacity={0.8}
      onPress={() => setShow(!show)}
    >
      <Feather name="align-justify" size={24} color="white" />
      {show ? (
        <View style={styles.drawerContainer} className='h-32 mt-32 mr-[-20] justify-between'>
          <Text className="text-white">Menu</Text>
          <Text className="text-white">Menu</Text>
          <Text className="text-white">Menu</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Drawer;


