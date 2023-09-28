// import React from 'react'

import { HStack, Image } from "@chakra-ui/react"
import TextField from "./TextField"
import listIcon from "../../../assets/icons/listIcon.png"
import additionIcon from "../../../assets/icons/additionIcon.png"

type Props = {
    placeholder?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange?: any
}

const ChoiceField = ({ placeholder, onChange }: Props) => {
  return (
    <HStack w="full">
        <Image alt="" src={listIcon} />
        <TextField onChange={onChange} placeholder={placeholder}/>
        <Image alt="" src={additionIcon} />
    </HStack>
  )
}

export default ChoiceField