// import React from 'react'

import { Box, Divider, Stack, Text } from "@chakra-ui/react"
import ElementLayer from "../Layout/ElementLayer"
import FormField from "../components/composite/FormField"

// type Props = {}

const PersonalInformation = () => {
  return (
    <ElementLayer title="Personal Information">
        <Box>
            <Stack py={5}>
                <Text fontSize={20} fontWeight={"semibold"}>First Name</Text>
            </Stack>

            <Divider orientation="horizontal"/>

            <Stack  py={5}>
                <Text fontSize={20} fontWeight={"semibold"}>Last Name</Text>
            </Stack>

            <Divider orientation="horizontal"/>

            <Stack py={5}>
                    <Text fontSize={20} fontWeight={"semibold"}>Email</Text>
            </Stack>

            <Divider orientation="horizontal"/>

            <FormField label="Phone" checkboxLabel="internal"/>

            <Divider orientation="horizontal"/>

            <FormField label="Nationality" checkboxLabel="internal"/>
            
            <Divider orientation="horizontal"/>

            <FormField label="Current Residence" checkboxLabel="internal"/>

            <Divider orientation="horizontal"/>

            <FormField label="ID Number" checkboxLabel="internal"/>

            <Divider orientation="horizontal"/>

            <FormField label="Date Of Birth" checkboxLabel="internal"/>

            <Divider orientation="horizontal"/>

            <FormField label="Gender" checkboxLabel="internal"/>
        </Box>
    </ElementLayer>
  )
}

export default PersonalInformation