import { useState } from 'react';
import { Switch, Text, HStack } from '@chakra-ui/react';

function ToggleSwitch(): JSX.Element {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <HStack>
        <Switch
        colorScheme="teal"
        size="md"
        isChecked={isChecked}
        onChange={handleToggle}
        />
        <Text textColor="#666666" fontSize={"sm"}>{ isChecked ? "Hide" : "Show" }</Text>
    </HStack>
    
  );
}

export default ToggleSwitch;
