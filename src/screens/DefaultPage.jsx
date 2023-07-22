import { Box, Text, useMediaQuery } from '@chakra-ui/react';
import SmallLanding from '../components/SmallLanding';
import BigLanding from '../components/BigLanding';

const DefaultPage = () => {
  const [isSmallerThan400] = useMediaQuery('(width < 400px)');
  return <Box>{isSmallerThan400 ? <SmallLanding /> : <BigLanding />}</Box>;
};

export default DefaultPage;
