import { VStack, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ComplaintForm from '../components/Forms/ComplaintForm';
import NavBar from '../components/NavBar';
import {
  getComplaints,
  complaintsReset,
} from '../redux/actions/complaintActions';
import DashComplaintViewer from '../components/Complaint/DashComplaintViewer';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(complaintsReset);
    dispatch(getComplaints());
    console.log('Dashboard useEffect called');
  }, [dispatch]);

  const user = useSelector(state => state.user);
  const { complaints, formClose, userInfo } = user;

  const redirect = () => {
    navigate('/login');
  };

  return (
    <>
      {userInfo ? <Text>User Information present</Text> : redirect()}
      <NavBar />
      <VStack>
        {formClose === false ? (
          complaints.map(complaint => (
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
          ))
        ) : (
          <ComplaintForm />
        )}
      </VStack>
    </>
  );
};

export default Dashboard;
