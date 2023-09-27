import { HStack, Text } from '@chakra-ui/react'
//import React from 'react'
import Checkbox from '../ui/others/Checkbox'
import ToggleSwitch from '../ui/others/ToggleSwitch'

type FormFieldProps = {
    label: string
    checkboxLabel: string
}

const FormField = ({ label, checkboxLabel }: FormFieldProps) => {
  return (
    <HStack justify={"space-between"} py={5}>
        <Text fontSize={20} fontWeight={"semibold"}>{label}</Text>
        <HStack w="50%" justify="space-between">
            <Checkbox label={checkboxLabel}/>
            <ToggleSwitch />
        </HStack>
                
    </HStack>
  )
}

export default FormField