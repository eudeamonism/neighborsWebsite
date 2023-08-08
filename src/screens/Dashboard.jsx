import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import ComplaintMobileViewer from '../components/ComplaintViewer/ComplaintMobileViewer';
import { closeForm } from '../redux/actions/complaintActions';
import { getAllComplaintsInDB } from '../redux/actions/complaintActions';
import { Spinner } from '@chakra-ui/react';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeForm());
    dispatch(getAllComplaintsInDB());
  }, [dispatch]);

  const complaint = useSelector(state => state.complaint);
  const { allComplaintData } = complaint;

  return (
    <Flex h="844px" direction="column" width="390px">
      <Box mb="55px">
        <NavBar />
      </Box>

      <Flex direction="column">
        <ComplaintMobileViewer />
      </Flex>
      <Spacer />
    </Flex>
  );
};

export default Dashboard;
