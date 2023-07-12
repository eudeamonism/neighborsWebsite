import { VStack, Flex, HStack, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ComplaintForm from '../components/Forms/ComplaintForm';
import NavBar from '../components/NavBar';
import { getComplaints } from '../redux/actions/complaintActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getComplaints());
  }, [dispatch]);
  
  const user = useSelector(state => state.user);
  const { complaints } = user;
  
console.log(complaints)
  


  return (
    <>
      <NavBar />
      <Flex>
        <HStack>
          <ComplaintForm />
          <VStack>
         {
          complaints.map(complaint => (<Text key={complaint._id}>{complaint.title}</Text>))
         }
            </VStack>
        </HStack>
      </Flex>
    </>
  );
};

export default Dashboard;
