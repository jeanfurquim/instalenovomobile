import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import {HeadlineText } from './styles'

interface Props{
    color:string;
    children: ReactNode
}

const Headline= ({color, children}:Props) => {
  return (
  <HeadlineText color={color} >
    {children}
  </HeadlineText>
  )
}

export default Headline;