import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import ComplaintMobileViewer from '../components/ComplaintViewer/ComplaintMobileViewer';
import { getAllComplaintsInDB } from '../redux/actions/complaintActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const complaint = useSelector(state => state.complaint);

  const { allComplaintData } = complaint;

  useEffect(() => {
    dispatch(getAllComplaintsInDB());
  }, [dispatch]);

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
