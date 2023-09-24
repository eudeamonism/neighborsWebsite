import React from 'react';
import { Image, Flex } from '@chakra-ui/react';

const LoginImage = () => {
  return (
    <Flex alignItems={'center'}>
      <Image
        borderRadius={"3"}
        boxShadow={"md"}
        height="425px"
        minW="300px"
        src="./assets/images/window.jpg"
        alt="Window"
        lazy="true"
        filter="grayscale(30%)"
      />
    </Flex>
  );
};

export default LoginImage;
