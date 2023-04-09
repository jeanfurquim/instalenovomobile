import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Buscar from "../screens/Buscar";
import BottomTabs from "../components/BottomTabs";
import BuscaProduto from "../screens/BuscaProduto";


const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Buscar"
        component={Buscar}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default Routes;
