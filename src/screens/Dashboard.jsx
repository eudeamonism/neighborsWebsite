import { Box, Flex, Spacer } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import ComplaintMobileViewer from '../components/ComplaintViewer/ComplaintMobileViewer';

const Dashboard = () => {
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
