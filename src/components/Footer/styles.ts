import { StyleSheet } from "react-native";
import { text, cores } from "../../default_styles";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems: "center",
        height:50,
        backgroundColor:cores.primary,
        position:"absolute",
        left:0,
        right:0,
        bottom:0

    }

})

export default styles;