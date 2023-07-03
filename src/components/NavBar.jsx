import React from 'react';
import { Box, Flex, Text,  } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const NavBar = () => {
  //You may need to delete Flex props other than alignItems
  return (
    <Box>
      <Box>
        <Flex
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems={'center'}
        >
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <ColorModeSwitcher />
        </Flex>
      </Box>
    </Box>
  );
};

export default NavBar;
