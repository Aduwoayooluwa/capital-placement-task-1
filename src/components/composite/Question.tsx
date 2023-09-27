import { Box, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import DropDown from '../ui/dropdown/DropDown'
import TextField from '../ui/input/TextField'
import PrimaryButton from '../ui/buttons/PrimaryButton'
import deleteIcon from "../../assets/icons/cancelIcon.png"
import ChoiceField from '../ui/input/ChoiceField'
import CheckboxComponent from '../ui/others/Checkbox'
import { useState } from "react"
// import React from 'react'

// type Props = {}

const data = ["Paragraph", "Short Answer", "Yes/No", "Dropdown", "Multiple choice", "Date", "Number", "File Upload", "Video Question"]

type QuestionProps = {
    setCreateQuestion: React.Dispatch<React.SetStateAction<boolean>>
}

const Question = ({ setCreateQuestion }: QuestionProps) => {

  const [questionType, setQuestionType] = useState<string>("Paragraph") 

  const handleQuestionType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedQuestionType = e.target.value

    setQuestionType(selectedQuestionType.toLowerCase())
  } 

  return (
    <Stack borderRadius={"20px"} w={"full"} align={"start"}>
                <VStack px={'4'} w="full" alignItems={"start"}>
                    <Text fontWeight={"semibold"}>Type</Text>
                    <DropDown onSelectChange={handleQuestionType} type={data[0]} data={data} />
                </VStack>

                <VStack px={'4'} w="full" alignItems={"start"}>
                    <Text fontWeight={"semibold"}>Question</Text>
                    <TextField placeholder='Type here' />

                    {/* if the user selects yes or no option, show this */}
                    {
                        questionType === "yes/no" && (
                            <CheckboxComponent label="Disqualify candidate if the answer is no"/>
                        )
                    }
                   
                </VStack>
                
                {
                    (questionType === "dropdown" || questionType === "multiple choice") && (
                        /* dropdown and multiple choice */
                        <VStack alignItems={"start"} px="4" w="full">
                            <Text fontWeight={"semibold"}>Choice</Text>
                            <ChoiceField placeholder='Type here' />

                            <CheckboxComponent label='Enable "Other" option'/>

                            {/* show if it is multiple choice */}
                            {
                                questionType === "multiple choice" && (
                                    <>
                                        <Box as="span" mt="7"></Box>
                                        <Text  fontWeight={"semibold"}>Max choice allowed</Text>
                                        <TextField placeholder='Enter number of choice allowed here'/>
                                    </>
                                )
                            }
                            
                    </VStack>
                    )
                }

                {/*  */}

                <HStack p={'4'} w="full" justify={"space-between"}>
                    <HStack cursor={"pointer"} onClick={() => {
                        setCreateQuestion(false)
                    }}>
                        <Image src={deleteIcon} alt="delete icon" />
                        <Text fontWeight={"semibold"} textColor='#A80000' fontSize={"15px"}>Delete question</Text>
                    </HStack>
                    <PrimaryButton onClick={() => {
                        setCreateQuestion(false)
                    }}  name='Save' />
                </HStack>
    </Stack>
  )
}

export default Question