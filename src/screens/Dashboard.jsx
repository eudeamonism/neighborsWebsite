import {
  HStack,
  VStack,
  Flex,
  Text,
  Box,
  Stack,
  Spacer,
  Wrap,
  Center,
} from '@chakra-ui/react';

import DashComplaintViewer from '../components/Complaint/DashComplaintViewer';

const Dashboard = () => {
  return (
    <HStack spacing="24px">
      <Spacer />
      <VStack spacing="6" mt="6">
        <DashComplaintViewer />
      </VStack>

      <VStack spacing="6" mt="6">
        <Box bg="green" width="600px" height="300px"></Box>
        <Box bg="green" width="600px" height="300px"></Box>
      </VStack>
      <Spacer />
    </HStack>
  );
};

export default Dashboard;
