import {
  Flex,
  Spacer,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

import Hamburger from './HamburgerMenu/Hamburger';
import ScrollPagination from './ComplaintViewer/ScrollPagination';

const NavBar = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      bg={useColorModeValue('red', 'purple.800')}
      width={isLargerThan800 ? '800px' : '390px'}
    >
      <Hamburger />
      <ScrollPagination />

      <ColorModeSwitcher />
    </Flex>
  );
};

export default NavBar;

/* <Flex direction="column" alignItems="center" justify="center">
        {allComplaintData ? <ScrollPagination /> : <Spinner />}
      </Flex> */
