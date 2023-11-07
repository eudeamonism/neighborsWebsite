import { useState, useEffect } from 'react';
import {
  Flex,
  Text,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Spinner,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  myDBComplaints,
  getAllComplaintsInDB,
} from '../../../redux/actions/complaintActions';
import MyComplaints from './MyComplaints';
import AllComplaints from './AllComplaints';

const UserCard = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const complaint = useSelector(state => state.complaint);
  const { loading, myComplaints } = complaint;

  const { userInfo } = user;
  const token = userInfo.token;
  const refresh = userInfo.refresh;

  const [myClick, setMyClick] = useState(false);

  const [allClick, setAllClick] = useState(false);

  const clickHandler = () => {
    setMyClick(false);
  };

  return (
    <>
      <Flex
        bg={useColorModeValue('teal.100', 'teal.600')}
        align="center"
        p="2"
        justify="space-between"
      >
        <Text fontWeight="medium">My Complaints</Text>
        {myClick === false ? (
          <ChevronDownIcon
            boxSize="6"
            onClick={() => {
              dispatch(myDBComplaints(token, refresh));
              setMyClick(!myClick);
              setAllClick(false);
            }}
          />
        ) : (
          <ChevronUpIcon
            boxSize="6"
            onClick={() => {
              setMyClick(!myClick);
            }}
          />
        )}
      </Flex>
      {myClick === true ? <MyComplaints clickHandler={clickHandler} /> : null}

      <Flex
        bg={useColorModeValue('blue.100', 'blue.600')}
        align="center"
        p="2"
        justify="space-between"
      >
        <Text fontWeight="medium">All Complaints</Text>
        {allClick === false ? (
          <ChevronDownIcon
            boxSize="6"
            onClick={() => {
              dispatch(getAllComplaintsInDB());
              setAllClick(!allClick);
              setMyClick(false);
            }}
          />
        ) : (
          <ChevronUpIcon
            boxSize="6"
            onClick={() => {
              setAllClick(!allClick);
            }}
          />
        )}
      </Flex>
      {allClick === true ? <AllComplaints /> : null}
    </>
  );
};

export default UserCard;
