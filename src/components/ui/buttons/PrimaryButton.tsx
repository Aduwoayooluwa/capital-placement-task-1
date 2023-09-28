/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@chakra-ui/react'
import React from 'react'

type Props = {
    name: string
    onClick?: any
    isLoading?: boolean
}

const PrimaryButton: React.FC<Props> = ({ name, onClick, isLoading }) => {
  return (
   <Button disabled={isLoading} isLoading={isLoading} onClick={onClick} _hover={{bg: "teal.900"}} fontSize={"14px"} textColor={"white"} bgColor="#00635B">{name}</Button>
  )
}

export default PrimaryButton