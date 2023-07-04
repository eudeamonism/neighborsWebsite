import React from 'react';
import {
  Center,
  Flex,
  HStack,
  Text,
  Stack,
  StackDivider,
} from '@chakra-ui/react';
import SignLogin from '../components/SignLogin';
import LoginImage from '../components/LoginImage';

const LoginRegister = () => {
  return (
    <>
      <Center minH={'100vh'}>
        <HStack spacing={'6'}>
          <LoginImage />

          <SignLogin />
        </HStack>
      </Center>
    </>
  );
};

export default LoginRegister;

// justify="center" alignItems={'center'} display={'flex'}
