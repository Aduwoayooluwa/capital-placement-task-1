// import React from 'react'

import { Box, Divider, Stack, Text } from "@chakra-ui/react"
import ElementLayer from "../Layout/ElementLayer"
import FormField from "../components/composite/FormField"
import  { useReducer } from "react"
import { formReducer, initialState } from "../utils/reducers/personalQuestion"

// type Props = {}

const formFields: Record<string, string> = {
  phone: "Phone",
  nationality: "Nationality",
  currentResidence: "Current Residence",
  idNumber: "ID Number",
  dob: "Date of Birth",
  gender: "Gender"
}

const PersonalInformation = () => {

  const [state, isCheckdDispatch] = useReducer(formReducer, initialState)

  const [toggleState, toggleDispatch] = useReducer(formReducer, initialState)

  
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
            {
              Object.keys(formFields).map((field) => {

                   return (
                    <FormField
                      label={formFields[field]}
                      checkboxLabel="internal"
                      isChecked={state[field]}
                      isToggled={toggleState[field]}
                      setChecked={() => isCheckdDispatch({ type: 'TOGGLE_CHECKBOX', field: field })}
                      setIsToggled={() => toggleDispatch({ type: 'TOGGLE_TOGGLE', field: field} )}
                      key={field}
                    />
                   )
   
              })
            }
            
            <Divider orientation="horizontal"/>
        </Box>
    </ElementLayer>
  )
}


export default PersonalInformation