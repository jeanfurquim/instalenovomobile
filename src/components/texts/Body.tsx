import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { BodyText } from './styles'

interface Props{
    color:string;
    children: ReactNode
}

const Body= ({color, children}:Props) => {
  return (
  <BodyText color={color} >
    {children}
  </BodyText>
  )
}

export default Body;