import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, useMediaQuery, useToast } from '@chakra-ui/react';
import SmallLanding from '../components/SmallLanding';
import BigLanding from '../components/BigLanding';

const DefaultPage = () => {
  const user = useSelector(state => state.user);
  const { userInfo } = user;
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard');
      toast({
        description: 'Welcome back!',
        status: 'success',
        isClosable: true,
      });
    } else {
    }
  }, []);

  const [isSmallerThan431] = useMediaQuery('(width < 431px)');

  return <Box>{isSmallerThan431 ? <SmallLanding /> : <BigLanding />}</Box>;
};

export default DefaultPage;
