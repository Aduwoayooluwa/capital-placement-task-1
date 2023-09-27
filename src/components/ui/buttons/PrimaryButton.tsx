/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@chakra-ui/react'
// import React from 'react'

type Props = {
    name: string
    onClick?: any
}

const PrimaryButton = ({ name, onClick }: Props) => {
  return (
   <Button onClick={onClick} _hover={{bg: "teal.900"}} fontSize={"14px"} textColor={"white"} bgColor="#00635B">{name}</Button>
  )
}

export default PrimaryButton