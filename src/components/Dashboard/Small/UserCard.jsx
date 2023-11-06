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
import { myDBComplaints } from '../../../redux/actions/complaintActions';
import MyComplaints from './MyComplaints';

const UserCard = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const complaint = useSelector(state => state.complaint);
  const { loading, myComplaints } = complaint;

  const { userInfo } = user;
  const token = userInfo.token;
  const refresh = userInfo.refresh;

  const [myClick, setMyClick] = useState(false);

  return (
    <>
      <Flex
        bg={useColorModeValue('teal.100', 'teal.600')}
        align="center"
        p="2"
        justify="space-between"
      >
        <Text fontWeight="medium">Flex Complaints</Text>
        {myClick === false ? (
          <ChevronDownIcon
            boxSize="6"
            onClick={() => {
              dispatch(myDBComplaints(token, refresh));
              setMyClick(!myClick);
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
      {myClick === true ? <MyComplaints /> : null}
    </>
  );
};

export default UserCard;
