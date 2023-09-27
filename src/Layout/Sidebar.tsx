import { Box, Stack, Image, Flex } from '@chakra-ui/react'
import React from 'react'
import HamburgerIcon from "../assets/icons/hamburger.png"
import NoteIcon from "../assets/icons/noteIcon.png"
import HomeIcon from "../assets/icons/homeICON.png"

type Props = {
    children: React.ReactElement
}

const Sidebar = ({ children }: Props) => {
  return (
    <Box h="full" as="main">
        <Flex h="full" align={"start"}>
            <Stack align={"center"} py={10} px={5} h="100vh" as="aside" w="113px">
                <Box>
                   <Image w="33px" height={"32px"} src={HamburgerIcon} alt="menu" /> 
                </Box>
                
                <Box mt={20}>
                    <Image w="33px" height={"32px"} src={HomeIcon} alt="menu" />
                </Box>

                <Box my={6}>
                    <Image w="33px" height={"32px"} src={NoteIcon} alt="menu" />
                </Box>
                
                
            </Stack>

            <Box px={3}  py={20} as="section">
                { children }
            </Box>
        </Flex>
        
    </Box>
  )
}

export default Sidebar
