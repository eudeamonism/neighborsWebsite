import React from 'react';
import { Stack, Image, Flex } from '@chakra-ui/react';

const LoginImage = () => {
  return (
    <Flex alignItems={'center'}>
      <Image
        borderRadius={"3"}
        boxShadow={"md"}
        height="425px"
        width="300px"
        src="./assets/images/window.jpg"
        alt="Dan Abramov"
      />
    </Flex>
  );
};

export default LoginImage;
