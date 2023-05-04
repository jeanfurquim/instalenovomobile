import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

interface SearchProps {
  placeholder: string;
  search: string;
  setSearch: Function;
}

const SearchInput: React.FC<SearchProps> = ({
    placeholder,
    search,
    setSearch
}) => {
  return (
    <View style ={{
        width:'100%',
        height: 60,
        marginVertical: 12.5,
        paddingVertical: 10,
        backgroundColor: "#FFF",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center"
    }}>
      <TextInput
      keyboardType="default"
       style={{
        width: "90%",
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E1E1E1',
       }}
       value={search}
       onChangeText={(text)=>setSearch(text)}
       placeholder={placeholder}
       />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
