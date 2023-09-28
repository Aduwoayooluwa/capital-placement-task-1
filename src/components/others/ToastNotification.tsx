import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react';

interface ToastProps {
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  status: any
  duration?: number;
  description?: string
}

const ToastNotification: React.FC<ToastProps> = ({ message, status, duration=10000, description }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <Box>
        <Box
      position="fixed"
      top="2rem"
      right="2rem"
      zIndex={9999}
      display={isOpen ? 'block' : 'none'}
    >
      <Alert 
      flexDirection='column'
      alignItems='start'
      minW="200px" status={status} variant="solid" borderRadius="md" boxShadow="lg">

        <AlertIcon />
        <AlertTitle>
          {message}
        </AlertTitle>
        
        <CloseButton
          onClick={() => setIsOpen(false)}
          position="absolute"
          right="8px"
          top="8px"
          
        />
        <AlertDescription>
          {description}
        </AlertDescription>
      </Alert>
      
    </Box>
    </Box>
  );
};

export default ToastNotification;

