import { VStack, Box, Flex, Text, Center, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Exist = () => {
  const navigate = useNavigate();
  return (
    <VStack mt="50px">
      <Text fontSize="2xl">This page does not exist</Text>
      <Text>Return Home?</Text>
      <Button onClick={()=> {navigate("/")}}>Home</Button>
    </VStack>
  );
};

export default Exist;
