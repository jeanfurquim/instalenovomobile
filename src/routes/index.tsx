import { View, Text, Image } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Buscar from "../screens/Buscar";
import BuscaProduto from "../screens/BuscaProduto";
import icone from "../assets/images/icon.png";

import { cores, text } from "../default_styles";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import CustomDrawer from "../components/CustomDrawer";
import Produto from "../screens/Produto";
import ProductDetails from "../components/ProductDetails";
import Model from "../screens/Model";
import Categoria from "../screens/Categoria";
import ProdCard from "../screens/ProdCar";
import BuscaModelo from "../screens/BuscaModelo";
import ProdutoTop from "../screens/ProdutoTop";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const HeaderTitle: React.FC = () => (
  <View className="flex-row justify-center items-center">
    <Image source={icone} className="h-5 w-5 m-2" />
    <Text className="text-white text-lg m-2" style={text.footnote}>
      Instale Soft
    </Text>
  </View>
);

const Routes: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: cores.primary,
          },
          drawerActiveBackgroundColor: "#01011d",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            fontSize: 13,
          },
          headerTitle: () => <HeaderTitle />,
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
        backBehavior="history"
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Buscar" component={Buscar} />
        <Drawer.Screen name="Buscar Produto" component={BuscaProduto} />
        <Drawer.Screen name="Buscar Modelo" component={BuscaModelo} />
        <Drawer.Screen
          name="Produto"
          component={Produto}
          options={{
            drawerItemStyle: { height: 0 },
          }}
        />
        <Drawer.Screen
          name="Produtos Detalhes"
          component={ProductDetails}
          options={{
            drawerItemStyle: { height: 0 },
          }}
        />
        <Drawer.Screen
          name="Models"
          component={Model}
          options={{
            drawerItemStyle: { height: 0 },
          }}
        />

        <Drawer.Screen
          name="Produtos Top"
          component={ProdutoTop}
          options={{
            drawerItemStyle: { height: 0 },
          }}
        />
        <Drawer.Screen
          name="Categorias"
          component={Categoria}
          options={{
            drawerItemStyle: { height: 0 },
          }}
        />
        <Drawer.Screen
          name="Produtos Car"
          component={ProdCard}
          options={{
            drawerItemStyle: { height: 0 },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
