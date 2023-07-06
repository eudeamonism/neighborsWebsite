import {
  HStack,
  VStack,
  Flex,
  Text,
  Box,
  Stack,
  Spacer,
} from '@chakra-ui/react';

import DashComplaintViewer from '../components/Complaint/DashComplaintViewer';

const Dashboard = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-evenly"
      
    >
      <VStack spacing="6" mt="6">
        <DashComplaintViewer />
      </VStack>

      <VStack spacing="6" mt="6">
        <Box bg="green" width="500px" height="300px"></Box>
        <Box bg="green" width="500px" height="300px"></Box>
      </VStack>
    </Flex>
  );
};

export default Dashboard;
