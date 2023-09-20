import React, { useEffect } from 'react';
import { useNavigate, Link as ReactLink } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  useColorModeValue,
  Divider,
  Center,
  useToast,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/userActions';

const SignLogin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const toast = useToast();
  const user = useSelector(state => state.user);
  const { loading, error, userInfo } = user;

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
      <Card height="auto" width="300px" align="center" variant="elevated">
        <CardHeader>
          <Heading
            color={useColorModeValue('light.600', 'dark.400')}
            fontFamily={'Caprasimo, Cursive'}
            fontWeight={'normal'}
          >
            Neighbors
          </Heading>
        </CardHeader>
        <CardBody>
          <Formik
            initialValues={{
              firstName: 'First Name',
              lastName: 'Last Name',
              displayName: 'Display Name',
              email: 'user@gmail.com',
              password: '',
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Invalid email')
                .required('Email required'),
              password: Yup.string()
                .required('Please enter a password')
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                  'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
                ),
            })}
            onSubmit={values => {
              dispatch(login(values.email, values.password));
            }}
          >
            {({ errors, touched }) => (
              <Form as="form">
                <VStack>
                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel
                      color="light.600"
                      _dark={{ color: 'dark.400' }}
                      htmlFor="email"
                    >
                      Email Address
                    </FormLabel>
                    <Field as={Input} id="email" name="email" type="email" />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel
                      color="light.600"
                      _dark={{ color: 'dark.400' }}
                      htmlFor="password"
                    >
                      Password
                    </FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                </VStack>
                <Button
                  mt="8"
                  type="submit"
                  variant="solid"
                  colorScheme="yellow"
                  _dark={{ colorScheme: 'blue' }}
                  width="full"
                  isLoading={loading}
                  loadingText="Loading"
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </CardBody>
        <CardFooter>
          <Flex alignItems={'center'}>
            <Text
              as={ReactLink}
              to="/signup"
              _hover={{ transform: 'scale(1.2)' }}
            >
              Sign Up?
            </Text>
            <Divider orientation="vertical" mr={'4'} ml={'4'} />
            <ColorModeSwitcher _hover={{ transform: 'scale(1.2)' }} />
          </Flex>
          <Flex>
            <Text>Captcha</Text>
          </Flex>
        </CardFooter>
        <Text
          mb="25px"
          onClick={() => {
            navigate('/reset');
          }}
          cursor="pointer"
          _hover={{ transform: 'scale(1.2)' }}
        >
          Forgot Password?
        </Text>
      </Card>
    </Center>
  );
};

export default SignLogin;
