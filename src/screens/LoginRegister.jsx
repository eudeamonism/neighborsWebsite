import React from 'react';
import { Center, HStack, useMediaQuery } from '@chakra-ui/react';
import SignLogin from '../components/SignLogin';
import LoginImage from '../components/LoginImage';

const LoginRegister = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Center minH={'100vh'}>
      <HStack spacing={'6'}>
        {isMobile ? (
          <SignLogin />
        ) : (
          <>
            <LoginImage />
            <SignLogin />
          </>
        )}
      </HStack>
    </Center>
  );
};

export default LoginRegister;

// justify="center" alignItems={'center'} display={'flex'}
