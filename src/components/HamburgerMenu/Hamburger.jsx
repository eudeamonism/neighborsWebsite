import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/userActions';

const Hamburger = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Signout = () => {
    navigate('/');
    dispatch(logoutUser());
  };

  const [isLargerThan390] = useMediaQuery('(min-width: 390px)');

  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Menu>
      <MenuButton onClick={isOpen ? onClose : onOpen}>
        {isOpen ? (
          <CloseIcon />
        ) : (
          <HamburgerIcon
            boxSize={isLargerThan390 ? '22px' : '36px'}
            marginLeft={isLargerThan390 ? '10px' : '26px'}
          />
        )}
      </MenuButton>
      <MenuList>
        <MenuItem>All Complaints</MenuItem>
        <MenuItem>My Complaints</MenuItem>
        <MenuItem>Create Complaint</MenuItem>
        <MenuItem onClick={Signout}>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Hamburger;

/* const singleUser = userComplaints.map(complaint => (
  <DashComplaintViewer
    key={complaint._id}
    complaintId={complaint._id}
    title={complaint.title}
    occurence={complaint.occurence}
    complaintType={complaint.complaintType}
    description={complaint.description}
    imageUrl={complaint.imageUrl}
    police={complaint.authoritiesNotified}
    resolved={complaint.resolved}
    mainStreet={complaint.crossStreet1}
    secondStreet={complaint.crossStreet2}
    isGuide="true"
    isAdmin="true"
    numberOfComplaints="12"
    displayName={complaint.displayName || 'Will Erase '}
  />
));  */
