import { Flex } from '@chakra-ui/react';
import PopularDetail from './PopularDetail';
const Popular = () => {
  return (
    <Flex bg="red" gap="2" overflowX="scroll" maxW="100%">
      <PopularDetail />
      <PopularDetail />
      <PopularDetail />
      <PopularDetail />
      <PopularDetail />
      <PopularDetail />
      <PopularDetail />
      <PopularDetail />
      
    </Flex>
  );
};

export default Popular;
