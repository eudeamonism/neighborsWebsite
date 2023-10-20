import { Flex, Spacer, Text } from '@chakra-ui/react';
import SplitList from './SplitList';
import MobileForm from '../Forms/MobileForm';

const SplitCase = () => {
  return (
    <Flex>
      <Flex
        w="100%"
        direction="column"
        align="center"
        overflowY="scroll"
        h="calc(80vh)"
      >
        <SplitList />
      </Flex>
      <Flex
        w="100%"
        h="calc(80vh)"
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
