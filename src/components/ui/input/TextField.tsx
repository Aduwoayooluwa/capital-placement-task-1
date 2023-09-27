import { Box, Input } from '@chakra-ui/react'
// import React from 'react'

type Props = {
    name?: string
    placeholder?: string
    title?: string
    onChange?: () => void
    value?: string
}

const TextField = ({ name, placeholder, onChange, value }: Props) => {
  return (
    <Box w="full">
        <Input  w="full" type="text" focusBorderColor='black' placeholder={placeholder} value={value} name={name} onChange={onChange}/>
    </Box>
  )
}

export default TextField