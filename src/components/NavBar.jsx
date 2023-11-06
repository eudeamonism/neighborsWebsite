import {
  Flex,
  Spacer,
  useColorModeValue,
  useMediaQuery,
  Text,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Hamburger from './HamburgerMenu/Hamburger';

const NavBar = () => {
  const user = useSelector(state => state.user);

  const { profile } = user;
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px"
      borderColor="gray"
      position="sticky"
      top="0"
      bg={useColorModeValue('gray.50', 'gray.800')}
      zIndex={100}
    >
      {isLargerThan800 ? null : <Hamburger />}
      {isLargerThan800 ? (
        <Text>Welcome Profile Name</Text>
      ) : (
        <Text fontWeight="medium">{profile !== null ? profile.displayName : null}</Text>
      )}
      {isLargerThan800 ? <Text>Create A Complaint</Text> : null}

      <ColorModeSwitcher />
    </Flex>
  );
};

export default NavBar;
