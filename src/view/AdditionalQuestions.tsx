// import React from 'react'
import { Box, Text, Stack, HStack, Image, Divider } from "@chakra-ui/react"
import pencilEditIcon from "../assets/icons/pencilIcon.png"
import ElementLayer from "../Layout/ElementLayer"
import Question from "../components/composite/Question"
import AddIcon from "../assets/icons/additionIcon.png"
import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion';


const AdditionalQuestions = () => {

    // this will open the question tab to create a question
    const [createQuestion, setCreateQuestion] = useState<boolean>(false)

  return (
    <ElementLayer title="Additional Questions">
        <Box>
            
            <Stack p={4}>
                <Text textColor={"#979797"} fontSize={14}>paragraph</Text>

                <HStack>
                    <Text fontWeight={"semibold"} fontSize={20}>
                        Please tell me about yourself in less than 500 words
                    </Text>

                    <Image src={pencilEditIcon} alt="edit icon" />
                </HStack>
            </Stack>

            <Divider my={6} orientation="horizontal" />

            <Stack p={4}>
                <Text textColor={"#979797"} fontSize={14}>Dropdown</Text>

                <HStack>
                    <Text fontWeight={"semibold"} fontSize={20}>
                        Please select the year of graduation from the list below
                    </Text>

                    <Image src={pencilEditIcon} alt="edit icon" />
                </HStack>
            </Stack>

            {/* create question */}
            <Box my={5}></Box>
            
            <AnimatePresence>
                {createQuestion && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <Question setCreateQuestion={setCreateQuestion} />
                </motion.div>
                )}
            </AnimatePresence>

            <HStack cursor={"pointer"} onClick={() => {
               setCreateQuestion(true)
            }}>
                <Image src={AddIcon} alt="add question"/>
                <Text fontWeight={"semibold "}>Add Question</Text>
            </HStack>
        </Box>
    </ElementLayer>

  )
}

export default AdditionalQuestions