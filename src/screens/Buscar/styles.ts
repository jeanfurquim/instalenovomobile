import { StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";
import { cores } from "../../default_styles";

const theme = StyleSheet.create({
  container: {
    backgroundColor: "#01010d",
    height: "100%",
  },
  containerBuscar: {
    width: "100%",
    height: "100%",
    backgroundColor: cores.primary,
    borderRadius: 20,
    shadowColor: cores.secondary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export { theme };
