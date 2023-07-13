import React from 'react';
import {
  Box,
  Flex,
  Text,
  Spacer,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useSelector, useDispatch } from 'react-redux';
import { closingForm } from '../redux/actions/complaintActions';

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { userInfo, formClose } = user;

  const colors = useColorModeValue('dark.600', 'light.600');

  const formHandler = () => {
    dispatch(closingForm());
  };

  return (
    <Box>
      <Flex justifyContent="end" alignItems="center">
        <Text ml="6" fontWeight="bold">
          Mobile Hamburger Icon
        </Text>
        <Spacer />
        <Text fontWeight="bold">Hi, {userInfo.firstName} </Text>
        <Spacer />
        <Button
          fontWeight="bold"
          ml="6"
          size="xs"
          colorScheme={formClose ? "red" : "green"}
          _dark={{ colorScheme: 'blue' }}
          onClick={formHandler}
        >
          {formClose ? "Close Form" : "+ Complaint"}
        </Button>
        <Text fontWeight="bold" ml="6">
          Logout Button
        </Text>
        <ColorModeSwitcher />
      </Flex>
    </Box>
  );
};

export default NavBar;
