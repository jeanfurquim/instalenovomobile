import { StyleSheet } from "react-native";

const cores = {
  white: "#FFF",
  primary: "#01010d",
  lightGray: "#F2F2F2",
  mediumGray: "#9E9E9E",
  darkGray: "#263238",
  black: "#000000",
  secondary: "#db6401",
};

const text = StyleSheet.create({
  headline: {
    fontFamily: "Poppins_700Bold",
  },
  headline2: {
    color: cores.secondary,
    fontFamily: "Poppins_700Bold",
  },
  title2: {
    fontFamily: "Poppins_700Bold",
  },
  title1: {
    fontFamily: "Poppins_700Bold",
  },
  body: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    textAlign: "center",
    color: cores.mediumGray,
  },
  tab: {
    fontFamily: "Poppins_500Medium",
  },
  footnote: {
    fontFamily: "Poppins_400Regular",
  },
  subhead: {
    fontFamily: "Poppins_400Regular",
  },
});

const temas = StyleSheet.create({
  containerSafe: {
  backgroundColor: "#01010d",

  },

  container:{
   flex:1,
   justifyContent:"center",
   alignItems:"center",
   backgroundColor: "#01010d",
   padding:1

  },

  containerCard:{
    width: "100%",
    height: "100%",

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

  textContainer: {
    paddingHorizontal: 20,
  },

  containerScroll: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    backgroundColor: "red",
  },

  container2: {
    flex:1,    
    backgroundColor: "#01010d",

  },

  dot: {
    backgroundColor: cores.secondary,
  },
  dotfalse: {
    backgroundColor: cores.lightGray,
  },

  image: {
    width: 50,
    height: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { temas, cores, text };
