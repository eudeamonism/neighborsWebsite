import { Flex, Spacer, Text } from '@chakra-ui/react';
import SplitList from './SplitList';
import MobileForm from '../Forms/MobileForm';

const SplitCase = () => {
  return (
    <Flex justify="space-evenly">
      <Flex
        direction="column"
        align="center"
        overflowY="scroll"
        h="calc(80vh)"
        w="100%"
      >
        <SplitList />
      </Flex>
    </Flex>
  );
};

export default SplitCase;
