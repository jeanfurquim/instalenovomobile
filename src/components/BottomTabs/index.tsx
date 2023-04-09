import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuscaProduto from "../../screens/BuscaProduto";
import Buscar from "../../screens/Buscar";
import Suporte from "../../screens/Suporte";

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabs = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Buscar" component={Buscar} />
      <Screen name="Suporte" component={Suporte}
 
      
      />

    </Navigator>
    
  );
};

export default BottomTabs;
