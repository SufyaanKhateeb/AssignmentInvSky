import React from 'react'
import { Text } from 'react-native'
export default (props: any) => (
  <Text
    {...props}
    style={{ fontFamily: 'Poppins-Regular', color: 'black', ...props.style }}
  >
    {props.children}
  </Text>
)
