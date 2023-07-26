import { Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import ComplaintMobileViewer from '../components/ComplaintViewer/ComplaintMobileViewer';

const Dashboard = () => {
  return (
    <>
      <Box mb="10px">
        <NavBar />
      </Box>
      <ComplaintMobileViewer />
    </>
  );
};

export default Dashboard;
