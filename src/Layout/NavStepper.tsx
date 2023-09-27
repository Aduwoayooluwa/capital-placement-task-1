// import React from 'react'

import { Box, HStack, Stack, Text } from "@chakra-ui/react"

interface CardBoxProps {
    title: string
    bg?: string
    textColor?: "white" | "black"
}

const CardBox = ({ title, bg, textColor }: CardBoxProps) => {
    return (
        <Stack fontWeight={"semibold"} fontSize={"20px"} w="301px" h="130px" bg={bg}  align={"center"} justify={"center"}>
            <Text textColor={textColor}>{ title }</Text>
        </Stack>
    )
}

const NavStepper = () => {
  return (
    <Box className="nav-stepper" mb="20">
        <HStack>
            <CardBox title="Program Details" />
            {/* <CardBox title="Application Form" bg="$00635B" textColor="white" /> */}
            <Stack
                fontWeight={"semibold"}
                fontSize={"20px"}
                w="301px"
                h="130px"
                bg={"#00635B"}
                align={"center"}
                justify={"center"}
                position="relative" // Set the container to a relative position
                >
                <Text textColor={"white"}>{"Application Form"}</Text>
                {/* Triangle */}
                <div
                    style={{
                    content: "",
                    position: "absolute",
                    top: 40,
                    right: -20, // Adjust this value to control the distance from the rectangle
                    width: 0,
                    height: 0,
                    borderTop: "21px solid transparent", // Adjust the size of the triangle
                    borderBottom: "21px solid transparent", // Adjust the size of the triangle
                    borderLeft: "25px solid #00635B",
                     // Adjust the color and size of the triangle
                    }}
                ></div>
            </Stack>

            <CardBox title="Workflow" />
            <CardBox title="Preview" />
        </HStack>
    </Box>
  )
}

export default NavStepper