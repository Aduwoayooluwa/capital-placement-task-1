import { Stack, Image, Input, Text, Box } from '@chakra-ui/react'
//import React from 'react'
import UploadImageIcon from "../../../assets/icons/uploadIcon.png"
type Props = {
    text: string
    onFileUpload?: () => void
    otherMessage?: string
}

const FileUpload = ({ text, onFileUpload, otherMessage }: Props) => {
  return (
    <Box m={6}>
        <Stack border={"dashed"} borderRadius={"5"}  borderWidth={"1px"} align={"center"} w={"full"} height={{base: "170px", md:"210px"}} justify={"center"}>
          <label htmlFor='uploadFile'></label>
          <Input display={"none"} onChange={onFileUpload} id="uploadFile" type='file' />
          <Image alt="" src={UploadImageIcon}/>
          <Text fontSize={"14px"} fontWeight={"semibold"}>{text}</Text>
          <Text fontSize={"14px"} textColor={"#979797"} fontWeight={"medium"}>{otherMessage}</Text>
        </Stack>
    </Box>
    
  )
}

export default FileUpload