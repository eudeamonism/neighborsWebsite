import { useDispatch } from 'react-redux';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import ComplaintMobileViewer from '../components/ComplaintViewer/ComplaintMobileViewer';
import PaginationStats from '../components/ComplaintViewer/PaginationStats';
import {closeForm} from '../redux/actions/complaintActions'

const Dashboard = () => {
  const dispatch = useDispatch();
  dispatch(closeForm());
  return (
    <Flex h="844px" direction="column" width="390px">
      <Box mb="10px">
        <NavBar />
      </Box>
      <Flex direction="column">
        <ComplaintMobileViewer />
      </Flex>
      <Spacer />

      <Flex direction="column" alignItems="center" justify="center">
        <PaginationStats />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
