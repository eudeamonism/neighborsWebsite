import { VStack, Flex, Text, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';

import ComplaintForm from '../components/Forms/ComplaintForm';
import NavBar from '../components/NavBar';
import { useSelector, useDispatch } from 'react-redux';

import { getUserComplaints } from '../redux/actions/userActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { userInfo } = user;

  const id = userInfo._id;

 /*  useEffect(() => {
    dispatch(getUserComplaints(id));
  }, [userInfo]); */

  console.log(userInfo);

  return (
    <>
      <NavBar />
      <Flex>
        <HStack>
          <ComplaintForm />
          <VStack>
            {/* {complaints?.map(complaint => (
              <Text key={complaint.title}>{complaint.title}</Text>
            ))} */}
          </VStack>
        </HStack>
      </Flex>
    </>
  );
};

export default Dashboard;
