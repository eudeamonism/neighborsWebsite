import {
  Flex,
  useColorModeValue,
  Text,
  Icon,
  Spinner,
  VStack,
} from '@chakra-ui/react';

const SingleDates = () => {
  return (
    <Flex
      direction="column"
      width="390px"
      bg={useColorModeValue('red.200', '#d2b48c')}
      justify="center"
      alignItems="center"
      gap="4"
      p="4"
    >
      <Flex
        height="60px"
        width="350px"
        bg={useColorModeValue('orange.600', '#616161')}
        alignItems="center"
      >
        <Text>Sample Data</Text>
      </Flex>
      <Flex
        height="60px"
        width="350px"
        bg={useColorModeValue('orange.600', '#a89f91')}
        alignItems="center"
      >
        <Text>Sample Data</Text>
      </Flex>
    </Flex>
  );
};

export default SingleDates;
