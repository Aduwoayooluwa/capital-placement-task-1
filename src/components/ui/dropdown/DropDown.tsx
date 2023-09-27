import { Box, Select } from '@chakra-ui/react'
// import React from 'react'

type Props= {
    type?: string
    data?: string[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSelectChange?: any
}

const DropDown = ({ type, data, onSelectChange }: Props) => {
  return (
    <Box w="full">
        <Select w="full" onChange={onSelectChange} focusBorderColor='black' defaultValue={type}>
            {
                data?.map((item, index) => {
                    return (
                        <option key={index}>{item}</option>
                    )
                })
            }
        </Select>
    </Box>
  )
}

export default DropDown