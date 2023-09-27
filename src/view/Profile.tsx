// import React from 'react'

import { Box, Divider } from "@chakra-ui/react"
import ElementLayer from "../Layout/ElementLayer"
import FormField from "../components/composite/FormField"

// type Props = {}

const Profile = () => {
  return (
    <ElementLayer title="Profile">
        <Box>
            <FormField label="Education" checkboxLabel="mandatory"/>

            <Divider orientation="horizontal"/>

            <FormField label="Experience" checkboxLabel="mandatory"/>

            <Divider orientation="horizontal"/>

            <FormField label="Resume" checkboxLabel="mandatory"/>
        </Box>
    </ElementLayer>
  )
}

export default Profile