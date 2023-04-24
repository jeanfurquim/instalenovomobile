import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { minProductCarCat } from '../../utils/types'

type Props = {
    prod:minProductCarCat
}

const ProductCard = ({prod}:Props) => {
  return (
    <View>
      
      <Text className='text-white'>{prod.name}</Text>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({})