import React from 'react';
import { Center, HStack, useMediaQuery, Flex, VStack } from '@chakra-ui/react';
import SignLogin from '../components/SignLogin';
import LoginImage from '../components/LoginImage';
import ComplaintList from '../components/Complaint/ComplaintList';

const LoginRegister = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Center minH={'100vh'}>
      <HStack spacing={'6'}>
        {isMobile ? (
          <SignLogin />
        ) : (
          <>
            <HStack spacing="6">
              <LoginImage />
              <SignLogin />
            </HStack>
            <VStack>< ComplaintList/></VStack>
          </>
        )}
      </HStack>
    </Center>
  );
};

export default LoginRegister;

// justify="center" alignItems={'center'} display={'flex'}
