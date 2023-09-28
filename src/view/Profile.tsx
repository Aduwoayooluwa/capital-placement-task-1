import React, { useState } from 'react';
import { Box, Divider, Button } from "@chakra-ui/react";
import ElementLayer from "../Layout/ElementLayer";
import FormField from "../components/composite/FormField";

interface FormFieldData {
  isExperienceChecked: boolean;
  isExperiencedToggled: boolean;
  isResumeChecked: boolean;
  isResumeToggled: boolean;
}

const Profile: React.FC = () => {
  const [formField, setFormField] = useState<FormFieldData>({
    isExperienceChecked: false,
    isExperiencedToggled: false,
    isResumeChecked: false,
    isResumeToggled: false
  });

  const onFormFieldChange = (field: string, value: boolean) => {
    setFormField({
      ...formField,
      [field]: value
    });
  };

  const handleSaveToLocalStorage = () => {
    // Save form field data to local storage
    localStorage.setItem('profileFormData', JSON.stringify(formField));
  };

  return (
    <ElementLayer title="Profile">
      <Box>
        <FormField
          label="Education"
          checkboxLabel="mandatory"
          isChecked={formField.isExperienceChecked}
          isToggled={formField.isExperienceChecked}
          setChecked={(value: boolean) => onFormFieldChange('isExperienceChecked', value)}
          setIsToggled={(value: boolean) => onFormFieldChange('isExperienceToggled', value)}
        />

        <Divider orientation="horizontal" />

        <FormField
          label="Experience"
          checkboxLabel="mandatory"
          isChecked={formField.isExperienceChecked}
          isToggled={formField.isExperienceChecked}
          setChecked={(value: boolean) => onFormFieldChange('isExperienceChecked', value)}
          setIsToggled={(value: boolean) => onFormFieldChange('isExperienceToggled', value)}
        />

        <Divider orientation="horizontal" />

        <FormField
          label="Resume"
          checkboxLabel="mandatory"
          isChecked={formField.isResumeChecked}
          isToggled={formField.isResumeChecked}
          setChecked={(value: boolean) => onFormFieldChange('isResumeChecked', value)}
          setIsToggled={(value: boolean) => onFormFieldChange('isResumeToggled', value)}
        />

        <Divider orientation="horizontal" />

        <Button colorScheme="teal" onClick={handleSaveToLocalStorage}>
          Save to Local Storage
        </Button>
      </Box>
    </ElementLayer>
  );
}

export default Profile;
