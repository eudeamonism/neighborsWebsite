import {
  Flex,
  Spacer,
  useColorModeValue,
  useMediaQuery,
  Text,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

import Hamburger from './HamburgerMenu/Hamburger';

const NavBar = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px"
      borderColor="gray"
      position="sticky"
      top="0"
    >
      {isLargerThan800 ? null : <Hamburger />}
      {isLargerThan800 ? <Text>Welcome Profile Name</Text> : null}
      {isLargerThan800 ? <Text>Create A Complaint</Text> : null}

      <ColorModeSwitcher />
    </Flex>
  );
};

export default NavBar;

