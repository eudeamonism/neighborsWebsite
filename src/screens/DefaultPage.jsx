import { Box, Text, useMediaQuery } from '@chakra-ui/react';
import SmallLanding from '../components/SmallLanding'


const DefaultPage = () => {
  const [isSmallerThan400] = useMediaQuery('(width < 400px)');
  return <Box>{isSmallerThan400 ? <SmallLanding /> : <Text>Big</Text>}</Box>;
};

export default DefaultPage;
