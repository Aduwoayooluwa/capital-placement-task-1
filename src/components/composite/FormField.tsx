import { HStack, Text } from '@chakra-ui/react'
import Checkbox from '../ui/others/Checkbox'
import ToggleSwitch from '../ui/others/ToggleSwitch'
import React from 'react';

type FormFieldProps = {
    label: string
    checkboxLabel: string
    isChecked?: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setChecked?: any
    isToggled?: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setIsToggled?: any
}

const FormField: React.FC<FormFieldProps> = ({ label, checkboxLabel, isChecked, setChecked, isToggled, setIsToggled }) => {
    return (
        <HStack justify={"space-between"} py={5}>
            <Text fontSize={20} fontWeight={"semibold"}>{label}</Text>
            <HStack w="50%" justify="space-between">
                <Checkbox label={checkboxLabel} isChecked={isChecked} onChange={setChecked} />
                <ToggleSwitch isToggled={isToggled} onToggle={setIsToggled} />
            </HStack>
        </HStack>
    )
}

export default FormField;
