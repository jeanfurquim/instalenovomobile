import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get('window').width / 2;

const styles = StyleSheet.create({
    drawerContainer:{
        width: deviceWidth 
    }

})

export default styles;