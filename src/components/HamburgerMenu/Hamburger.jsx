import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/userActions';
import { openForm } from '../../redux/actions/complaintActions';
import { filterMode } from '../../redux/actions/filterActions';

const Hamburger = ({ filterHandler }) => {
  const filter = useSelector(state => state.filter);
  const { filterOn } = filter;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Signout = () => {
    navigate('/');
    dispatch(logoutUser());
  };

  const [isLargerThan430] = useMediaQuery('(min-width: 431px)');

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      {filterOn === true ? null : (
        <Menu>
          <MenuButton>
            <HamburgerIcon
              boxSize={isLargerThan430 ? '30px' : '24px'}
              marginLeft={isLargerThan430 ? '20px' : '10px'}
            />
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(openForm());
              }}
            >
              Create Complaint
            </MenuItem>
            <MenuItem onClick={filterHandler}>Filter</MenuItem>
            <MenuItem onClick={Signout}>Sign Out</MenuItem>
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default Hamburger;
