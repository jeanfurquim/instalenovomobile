import { FlatList, TouchableOpacity, Text } from 'react-native';
import React from 'react'

const DropdownComponent = ({options, selectedValue, onValueChange}:any) => {
    return(
    <FlatList
    data={options}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => onValueChange(item.value)}
      >
        <Text className='text-black'>{item.label}</Text>
      </TouchableOpacity>
    )}
  />
    )
}

export default DropdownComponent

