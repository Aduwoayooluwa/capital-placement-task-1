import { Switch, Text, HStack } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ToggleSwitch({ isToggled, onToggle }: any) {
  // const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <HStack>
        <Switch
        colorScheme="teal"
        size="md"
        isChecked={isToggled}
        onChange={onToggle}
        />
        <Text textColor="#666666" fontSize={"sm"}>{ isToggled ? "Hide" : "Show" }</Text>
    </HStack>
    
  );
}

export default ToggleSwitch;
