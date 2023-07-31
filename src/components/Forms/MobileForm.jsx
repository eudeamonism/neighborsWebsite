import React from 'react';
import { Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import FormComponent from './FormComponent';

const mobileForm = () => {
  return (
    <Flex 
    direction="column" 
    width="390px" 
    height="844px" 
    alignItems="center"

    >
      <ColorModeSwitcher />

      <Flex
        width="380px"
        height="800px"
        backgroundColor="gray.600"
        borderRadius="5"
        p="4"
        justifyContent="center"
      >
        <FormComponent />
      </Flex>
    </Flex>
  );
};

export default mobileForm;
