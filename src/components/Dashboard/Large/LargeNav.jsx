import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { gettingProfile, logoutUser } from '../../../redux/actions/userActions';
import { motion } from 'framer-motion';

const LargeNav = ({
  createComplaintToggle,
  myComplaintsToggle,
  allComplaintsToggle,
  policyToggleMode,
  createComplaint,
  myComplaints,
  allComplaints,
  policy,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { userInfo, profile } = user;
  if (userInfo) {
  }

  return (
    <Flex
      borderBottom="1px"
      h="50px"
      align="center"
      p="4"
      justify="space-between"
      minW="1000px"
    >
      {profile && profile.displayName ? (
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <Text>{profile.displayName}</Text>
        </motion.div>
      ) : null}

      <Text
        onClick={createComplaintToggle}
        fontSize={{ lg: '18' }}
        _hover={{ fontSize: '20' }}
        fontWeight={createComplaint === true ? 'bold' : null}
      >
        Create Complaint
      </Text>
      <Text
        onClick={myComplaintsToggle}
        fontSize={{ lg: '18' }}
        _hover={{ fontSize: '20' }}
        fontWeight={myComplaints === true ? 'bold' : null}
      >
        My Complaints
      </Text>
      <Text
        onClick={allComplaintsToggle}
        fontSize={{ lg: '18' }}
        _hover={{ fontSize: '20' }}
        fontWeight={allComplaints === true ? 'bold' : null}
      >
        All Complaints
      </Text>
      <Text
        onClick={policyToggleMode}
        fontSize={{ lg: '18' }}
        _hover={{ fontSize: '20' }}
        fontWeight={policy === true ? 'bold' : null}
      >
        Policy
      </Text>
      <Text
        bg="gray.50"
        _dark={{ backgroundColor: 'gray.600' }}
        p="1"
        borderRadius="4"
        onClick={() => {
          navigate('/');
          dispatch(logoutUser());
        }}
      >
        Sign Out
      </Text>
      <ColorModeSwitcher />
    </Flex>
  );
};

export default LargeNav;

/* bg="red.50"
      _dark={{ backgroundColor: 'red.600' }} */
