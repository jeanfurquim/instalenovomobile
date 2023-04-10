import { View, Text, Image } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Buscar from "../screens/Buscar";
import BottomTabs from "../components/BottomTabs";
import BuscaProduto from "../screens/BuscaProduto";
import icone from "../assets/images/icon.png";

import { cores, text } from "../default_styles";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Suporte from "../screens/Suporte";
import SelectModelo from "../screens/SelectModelo";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const HeaderTitle: React.FC = () => (
  <View className="flex-row justify-center items-center">
    <Image source={icone} className="h-6 w-6 m-2" />
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
          headerTitle: () => <HeaderTitle />,
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Buscar" component={Buscar} />
        <Drawer.Screen name="Suporte" component={Suporte} options={{
         drawerItemStyle:{ height: 0}
          
        }} />
        <Drawer.Screen name="Buscar Modelo" component={SelectModelo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

/*const AuxRoutes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
   
    </Stack.Navigator>
  );
}*/

export default Routes;
