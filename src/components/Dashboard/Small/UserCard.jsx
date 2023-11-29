import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Text, useColorModeValue, Spinner } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  myDBComplaints,
  getAllComplaintsInDB,
} from '../../../redux/actions/complaintActions';
import MyComplaints from './MyComplaints';
import Test from '../../../screens/Test';

const UserCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const complaint = useSelector(state => state.complaint);
  const { loading, myComplaints } = complaint;

  const { userInfo } = user;
  const token = userInfo?.token; // Use optional chaining to check for null
  const refresh = userInfo?.refresh; // Use optional chaining to check for null

  const [myClick, setMyClick] = useState(false);
  const [allClick, setAllClick] = useState(false);

  /*  useEffect(() => {
    if (!userInfo) {
      navigate("/")
    }
  }, [dispatch]); */

  const clickHandler = () => {
    setMyClick(false);
  };

  return (
    <>
      <Flex
        bg="teal.100"
        _dark={{ backgroundColor: 'teal.600' }}
        align="center"
        p="2"
        justify="space-between"
      >
        <Text fontWeight="medium">My Complaints</Text>
        {myClick === false ? (
          <ChevronDownIcon
            boxSize="6"
            onClick={() => {
              dispatch(myDBComplaints(token, refresh)); // Use token and refresh if available
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
        bg="teal.100"
        _dark={{ backgroundColor: 'teal.600' }}
        align="center"
        p="2"
        justify="space-between"
      >
        <Text fontWeight="medium">
          {loading === true ? <>Loading... {<Spinner />}</> : 'All Complaints'}
        </Text>
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
      {allClick === true ? <Test /> : null}
    </>
  );
};

export default UserCard;
