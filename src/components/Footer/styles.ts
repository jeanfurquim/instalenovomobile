import { StyleSheet } from "react-native";
import { text, cores } from "../../default_styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: cores.primary,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 15,
  },
  containerIos: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    backgroundColor: cores.primary,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 15,
  },
  pill: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#000',
    borderRadius: 30,
  },
  pillActive: {
    backgroundColor: "#FFF",
  },
  pillText: {
    
    color: "#FFF",
  },
  pillTextActive: {
    color: "#000",
  },
});

export default styles;
