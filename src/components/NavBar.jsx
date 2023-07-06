import React from 'react';
import { Box, Flex, Text, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const NavBar = () => {
  //You may need to delete Flex props other than alignItems
  return (
    <Box>
      <Flex justifyContent="end" alignItems="center">
        <Text ml="6" fontWeight="bold">Mobile Hamburger Icon</Text>
        <Spacer />
        <Text fontWeight="bold">Hi, First Name</Text>
        <Spacer />
        <Text fontWeight="bold" ml="6">+ Complaint</Text>
        <Text fontWeight="bold" ml="6">Logout Button</Text>
        <ColorModeSwitcher />
      </Flex>
    </Box>
  );
};

export default NavBar;

/* <Flex
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems={'center'}
        >
          <ColorModeSwitcher />
        </Flex> */
