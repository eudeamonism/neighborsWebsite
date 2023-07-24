import {
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Hamburger = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Menu>
      <MenuButton onClick={isOpen ? onClose : onOpen}>
        {!isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </MenuButton>
      <MenuList>
        <MenuItem>All Complaints</MenuItem>
        <MenuItem>My Complaints</MenuItem>
        <MenuItem>Create Complaint</MenuItem>
        <MenuItem>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Hamburger;

