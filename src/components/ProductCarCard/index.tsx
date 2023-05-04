import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProductCar } from '../../utils/types';


type Props = {
    prodCar: ProductCar;
  };
  
const ProductCarCard = ({prodCar}:Props) => {
  return (
    <View>
      <Text className='text-white'>{prodCar.productName}</Text>
    </View>
  )
}

export default ProductCarCard

const styles = StyleSheet.create({})