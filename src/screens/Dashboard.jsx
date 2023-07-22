import { VStack, Text, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import ComplaintForm from '../components/Forms/ComplaintForm';
import NavBar from '../components/NavBar';
import { getComplaints } from '../redux/actions/complaintActions';
import DashComplaintViewer from '../components/Complaint/DashComplaintViewer';

const Dashboard = () => {
  const [editForm, setEditForm] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.user);
  const { complaints, formClose, userInfo, numberOfComplaints } = user;

  const redirect = () => {
    navigate('/login');
  };

  useEffect(() => {
    dispatch(getComplaints());
  }, [dispatch, numberOfComplaints, userInfo]);

  return (
    <>
      {userInfo ? (
        <>
          <NavBar />
          <VStack>
            {formClose === false ? (
              complaints.map(complaint => (
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
                  isGuide={userInfo.isGuide}
                  isAdmin={userInfo.isAdmin}
                  numberOfComplaints={userInfo.numberOfComplaints}
                  displayName={complaint.displayName || 'Will Erase '}
                />
              ))
            ) : (
              <ComplaintForm />
            )}
          </VStack>
        </>
      ) : (
        redirect()
      )}
    </>
  );
};

export default Dashboard;
