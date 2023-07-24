import { VStack, Text, useToast, HStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import ComplaintForm from '../components/Forms/ComplaintForm';
import NavBar from '../components/NavBar';
import {
  getComplaints,
  gettingOnlyAUsersComplaints,
} from '../redux/actions/complaintActions';
import AllComplaints from '../components/Complaint/DashStates/AllComplaints';
import UsersComplaints from '../components/Complaint/DashStates/UsersComplaints';
import DashboardMenu from '../components/DashboardMenu';
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.user);
  const {
    complaints,
    formClose,
    userInfo,
    numberOfComplaints,
    complaintSwitch,
    userComplaints,
  } = user;

  const userId = userInfo._id;

  const redirect = () => {
    navigate('/login');
  };

  useEffect(() => {
    dispatch(getComplaints());
    dispatch(gettingOnlyAUsersComplaints(userId));
  }, [dispatch, numberOfComplaints, userInfo, userId]);

  console.log(complaints);
  console.log(userComplaints);

  /* const allComplaints = complaints.map(complaint => (
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
      isGuide="true"
      isAdmin="true"
      numberOfComplaints="12"
      displayName={complaint.displayName || 'Will Erase '}
    />
  ));
  const singleUser = userComplaints.map(complaint => (
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
      isGuide="true"
      isAdmin="true"
      numberOfComplaints="12"
      displayName={complaint.displayName || 'Will Erase '}
    />
  )); */

  return (
    <>
      {}
      {userInfo ? (
        <>
          <NavBar />
          <VStack>
            <DashboardMenu />
            <VStack>
              {formClose === false && complaintSwitch === false ? (
                <Text>Hello</Text>
              ) : complaintSwitch === true && complaintSwitch === false ? (
                <Text>Hello</Text>
              ) : (
                <ComplaintForm />
              )}
            </VStack>
          </VStack>
        </>
      ) : (
        redirect()
      )}
    </>
  );
};

export default Dashboard;
