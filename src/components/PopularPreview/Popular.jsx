import { Flex, Box } from '@chakra-ui/react';
import PopularDetail from './PopularDetail';
const Popular = () => {
  return (
    <Flex gap="2" maxW="100%" overflowX="auto">
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
