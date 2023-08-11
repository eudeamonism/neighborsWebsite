import { Flex, useColorModeValue, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const SingleNav = () => {
  return (
    <Flex
      bg={useColorModeValue('orange.300', 'blue.600')}
      height="60px"
      alignItems="center"
      p="15"
      justify="space-between"
    >
      <Text
        onClick={() => {
          console.log('delete');
        }}
        fontSize="2xl"
        ml="5px"
      >
        Delete
      </Text>
      <Text
        onClick={() => {
          console.log('edit');
        }}
        fontSize="2xl"
      >
        Edit
      </Text>
      <Text
        onClick={() => {
          console.log('close');
        }}
        fontSize="2xl"
        mx="10px"
      >
        Close
      </Text>
    </Flex>
  );
};

export default SingleNav;
