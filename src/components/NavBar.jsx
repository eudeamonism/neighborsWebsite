import { Box, Flex, Text, Spacer, Button } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  closingForm,
  removingAllUserComplaints,
} from '../redux/actions/complaintActions';
import { logoutUser } from '../redux/actions/userActions';
import { BiExit } from 'react-icons/bi';
import Hamburger from './HamburgerMenu/Hamburger';

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { userInfo, formClose, complaintSwitch } = user;
  const navigate = useNavigate();

  const formHandler = () => {
    dispatch(closingForm());
  };

  const logoutHandler = () => {
    navigate('/');
    dispatch(logoutUser());
    dispatch(removingAllUserComplaints());
  };

  return (
    <Box>
      <Flex justifyContent="end" alignItems="center">
        <Hamburger />
        <Spacer />
        <Text fontWeight="bold">Hi, {userInfo.displayName} </Text>
        <Spacer />
        {complaintSwitch === true ? (
          <Button
            fontWeight="bold"
            ml="6"
            size="xs"
            colorScheme="green"
            onClick={formHandler}
            hidden={formClose ? true : false}
          >
            + Complaint
          </Button>
        ) : null}

        <Button
          fontWeight="bold"
          ml="6"
          size="xs"
          variant="outline"
          colorScheme="grey"
          rightIcon={<BiExit size="18" />}
          onClick={logoutHandler}
          _hover={{ color: '#A5A5A5' }}
        >
          Sign out
        </Button>

        <ColorModeSwitcher />
      </Flex>
    </Box>
  );
};

export default NavBar;
