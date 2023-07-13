import React from 'react';
import {
  Box,
  Flex,
  Text,
  Spacer,
  Button,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useSelector, useDispatch } from 'react-redux';
import { closingForm } from '../redux/actions/complaintActions';
import { logoutUser } from '../redux/actions/userActions';
import { BiExit } from 'react-icons/bi';
const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { userInfo, formClose } = user;

  const formHandler = () => {
    dispatch(closingForm());
  };

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <Box>
      <Flex justifyContent="end" alignItems="center">
        <Text ml="6" fontWeight="bold">
          Mobile Hamburger Icon
        </Text>
        <Spacer />
        <Text fontWeight="bold">Hi, Empty </Text>
        <Spacer />
        <Button
          fontWeight="bold"
          ml="6"
          size="xs"
          colorScheme={formClose ? 'red' : 'green'}
          _dark={{ colorScheme: 'blue' }}
          onClick={formHandler}
        >
          {formClose ? 'Close Form' : '+ Complaint'}
        </Button>

        <Button
          fontWeight="bold"
          ml="6"
          size="xs"
          variant="outline"
          colorScheme="grey"
          rightIcon={<BiExit size="18" />}
          onClick={logoutHandler}
          _hover={{color: "#A5A5A5"}}
        >
          Sign out
        </Button>

        <ColorModeSwitcher />
      </Flex>
    </Box>
  );
};

export default NavBar;
