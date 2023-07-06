import { VStack, Box, useColorModeValue } from '@chakra-ui/react';

const DashComplaintViewer = () => {
  return <VStack>
    <Box bg={useColorModeValue("gray.200", "gray.600")} width="800px" height="300px" borderRadius="8"></Box>
  </VStack>;
};

export default DashComplaintViewer;
