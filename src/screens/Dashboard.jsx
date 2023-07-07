import { HStack, VStack, Box, Spacer, Flex } from '@chakra-ui/react';

import DashComplaintViewer from '../components/Complaint/DashComplaintViewer';
import ComplaintForm from '../components/Forms/ComplaintForm';
import NavBar from '../components/NavBar';

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Flex>
        <VStack ml="2" mr="2">
          <DashComplaintViewer />
        </VStack>

        <VStack>
          <ComplaintForm />
        </VStack>
      </Flex>
    </>
  );
};

export default Dashboard;
