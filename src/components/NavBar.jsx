import { Box, Flex, Spacer } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

import Hamburger from './HamburgerMenu/Hamburger';

const NavBar = () => {
  return (
    <Box>
      <Flex justifyContent="end" alignItems="center">
        <Hamburger />
        <Spacer />

        <ColorModeSwitcher />
      </Flex>
    </Box>
  );
};

export default NavBar;
