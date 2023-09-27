// import React from 'react'

import { HStack, Image } from "@chakra-ui/react"
import TextField from "./TextField"
import listIcon from "../../../assets/icons/listIcon.png"
import additionIcon from "../../../assets/icons/additionIcon.png"

type Props = {
    placeholder?: string
}

const ChoiceField = ({ placeholder }: Props) => {
  return (
    <HStack w="full">
        <Image alt="" src={listIcon} />
        <TextField placeholder={placeholder}/>
        <Image alt="" src={additionIcon} />
    </HStack>
  )
}

export default ChoiceField