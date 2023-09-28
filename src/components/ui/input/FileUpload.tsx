import React, { useState } from 'react';
import { Stack, Image, Input, Text, Box, HStack } from '@chakra-ui/react';
import UploadImageIcon from '../../../assets/icons/uploadIcon.png';
import deleteIcon from "../../../assets/icons/cancelIcon.png"

type Props = {
  text: string;
  onFileUpload?: (file: File) => void;
  onFileDelete?: () => void; 
  otherMessage?: string;
};

const FileUpload = ({ text, onFileUpload, onFileDelete, otherMessage }: Props) => {
  const [imagePreview, setImagePreview] = useState<string | undefined>();
  const [selectedFile, setSelectedFile] = useState<File | undefined>();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // Check if the selected file is an image
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target) {
            setImagePreview(event.target.result as string);
            setSelectedFile(file);
          }
        };
        reader.readAsDataURL(file);

        if (onFileUpload) {
          onFileUpload(file);
        }
      } else {
        alert('Please select a valid image file.');
      }
    }
  };

  const handleDeleteClick = () => {
    setImagePreview(undefined);
    setSelectedFile(undefined);

    // Call the onFileDelete callback when deleting the file
    if (onFileDelete) {
      onFileDelete();
    }
  };

  return (
    <Box m={6}>
      <label htmlFor="uploadFile">
        <Stack
          border={!imagePreview ? 'dashed' : "none"}
          borderRadius={'5'}
          borderWidth={'1px'}
          align={'center'}
          w={'full'}
          height={{ base: '170px', md: '210px' }}
          justify={'center'}
        >
          {imagePreview ? (
            <Box shadow={"lg"} mt={-20} height={{ base: '170px', md: '210px' }}  borderBottomRadius={"lg"}>
              <Image alt="Uploaded Image" src={imagePreview} h="full" w="full" />
                <HStack cursor={"pointer"} py={4} bg="white" onClick={handleDeleteClick}>
                    <Image src={deleteIcon} alt="delete icon" />
                    
                    <Text fontWeight={"semibold"} textColor='#A80000' fontSize={"15px"}>Delete & re-upload</Text>
                    <Text fontSize={"sm"}>{selectedFile?.name}</Text>
                </HStack>
            </Box>
          ) : (
            <>
              <Input
                display={'none'}
                onChange={handleFileUpload}
                id="uploadFile"
                type="file"
                accept="image/*" 
              />
              <Image alt="" src={UploadImageIcon} />
              <Text fontSize={'14px'} fontWeight={'semibold'}>
                {text}
              </Text>
              <Text fontSize={'14px'} textColor={'#979797'} fontWeight={'medium'}>
                {otherMessage}
              </Text>
            </>
          )}
        </Stack>
      </label>
    </Box>
  );
};

export default FileUpload;
