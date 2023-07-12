import { VStack, Flex, HStack, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ComplaintForm from '../components/Forms/ComplaintForm';
import NavBar from '../components/NavBar';
import {
  getComplaints,
  complaintsReset,
  openForm,
  shutForm,
} from '../redux/actions/complaintActions';
import DashComplaintViewer from '../components/Complaint/DashComplaintViewer';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(complaintsReset);
    dispatch(getComplaints());
    dispatch(shutForm());
  }, [dispatch]);

  const user = useSelector(state => state.user);
  const { complaints, closeForm } = user;

  console.log(closeForm);

  return (
    <>
      <NavBar />
      <Flex>
        <HStack>
          <ComplaintForm />
          <VStack>
            {complaints.map(complaint => (
              <DashComplaintViewer
                key={complaint._id}
                title={complaint.title}
                occurence={complaint.occurence}
                complaintType={complaint.complaintType}
                description={complaint.description}
                imageUrl={complaint.imageUrl}
                police={complaint.authoritiesNotified}
                resolved={complaint.resolved}
                mainStreet={complaint.crossStreet1}
                secondStreet={complaint.crossStreet2}
              />
            ))}
          </VStack>
        </HStack>
      </Flex>
    </>
  );
};

export default Dashboard;
