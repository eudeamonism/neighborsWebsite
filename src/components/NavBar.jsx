import React from 'react';
import { Box, Flex, Text, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import {useSelector} from 'react-redux'


const NavBar = () => {
  const user = useSelector((state) => state.user)
  const {userInfo} = user;
  

  return (
    <Box>
      <Flex justifyContent="end" alignItems="center">
        <Text ml="6" fontWeight="bold">Mobile Hamburger Icon</Text>
        <Spacer />
        <Text fontWeight="bold">Hi, {userInfo.firstName} </Text>
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
