import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Center, HStack, useMediaQuery, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import SignLogin from '../components/SignLogin';
import LoginImage from '../components/LoginImage';

const LoginRegister = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const { loading, error, userInfo } = user;
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard');
      toast({
        description: 'Welcome Back!',
        status: 'success',
        isClosable: true,
      });
    } else if (error) {
      toast({
        description: 'Email or password is incorrect!',
        status: 'error',
        isClosable: true,
      });
    }
  }, [userInfo, error, navigate, toast]);

  return (
    <Center minH={'100vh'}>
      <HStack spacing={'6'}>
        {isMobile ? (
          <SignLogin />
        ) : (
          <>
            <HStack spacing="6">
              <LoginImage />
              <SignLogin />
            </HStack>
          </>
        )}
      </HStack>
    </Center>
  );
};

export default LoginRegister;

// justify="center" alignItems={'center'} display={'flex'}
