import { Box, Text, Stack } from '@chakra-ui/react'
import React from 'react'

type Props = {
    title: string
    children: React.ReactElement
}

const ElementLayer = ({ title, children }: Props) => {
  return (
   <Box w="full" borderRadius={"20px"}>
        <Stack mb={'4'} justify="center" p={'4'} w="full" height="60px" borderTopRadius={"20px"} bg="#D0F7FA">
            <Text fontSize={"25px"} fontWeight={"semibold"}>{ title }</Text>
        </Stack>

        <Box p={'4'} w="full">
            { children }
        </Box>


   </Box>
  )
}

export default ElementLayer