import { Flex, Spacer, Text } from '@chakra-ui/react';
import SplitList from './SplitList';
import MobileForm from '../Forms/MobileForm';

const SplitCase = () => {
  return (
    <Flex>
      <Flex
        w="100%"
        h="510px"
        direction="column"
        align="center"
        overflowY="scroll"
      >
        <SplitList />
      </Flex>
      <Flex
        w="100%"
        h="510px"
        bg="blue.900"
        overflowY="scroll"
        align="center"
        direction="column"
      >
        <MobileForm />
      </Flex>
    </Flex>
  );
};

export default SplitCase;
