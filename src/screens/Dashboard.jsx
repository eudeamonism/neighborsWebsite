import { VStack, Flex, Text} from '@chakra-ui/react';
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

  useEffect(() => {
dispatch(getUserComplaints(id))
  }, [dispatch])
console.log(user.complaints)
  

  return (
    <>
      <NavBar />
      <Flex>
        <VStack>
          <ComplaintForm />
          <Text>hola {}</Text>
        </VStack>
      </Flex>
    </>
  );
};

export default Dashboard;
