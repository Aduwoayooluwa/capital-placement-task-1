import React from 'react';
import { Checkbox, CheckboxProps } from '@chakra-ui/react';

interface MyCheckboxProps extends CheckboxProps {
  label: string;
}

const CheckboxComponent: React.FC<MyCheckboxProps> = ({ label, ...rest }) => {
  return (
    
    <Checkbox fontSize={"15px"} colorScheme='teal' {...rest}>
      {label}
    </Checkbox>
  );
}

export default CheckboxComponent;
