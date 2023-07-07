import React from 'react';
import { useNavigate, Link as ReactLink, useLocation } from 'react-router-dom';
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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/userActions';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { loading, error, userInfo, complaints } = user;

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
              firstName: Yup.string().required('Please enter your first name'),
              lastName: Yup.string().required('Please enter your last name'),
              displayName: Yup.string().required(
                'Please enter your display name'
              ),
              email: Yup.string()
                .email('Invalid email')
                .required('An email address is required Son!'),
              password: Yup.string()
                .required('Please enter a password')
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                  'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
                ),
            })}
            onSubmit={values => {
              dispatch(
                register(
                  values.firstName,
                  values.lastName,
                  values.displayName,
                  values.email,
                  values.password
                )
              );
              
            }}
          >
            {({ errors, touched }) => (
              <Form as="form">
                <VStack>
                  <FormControl isInvalid={!!errors.firstName}>
                    <FormLabel
                      color="light.600"
                      _dark={{ color: 'dark.400' }}
                      htmlFor="email"
                    >
                      First Name
                    </FormLabel>
                    <Field
                      as={Input}
                      id="firstName"
                      name="firstName"
                      type="text"
                    />
                    <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.lastName}>
                    <FormLabel
                      color="light.600"
                      _dark={{ color: 'dark.400' }}
                      htmlFor="email"
                    >
                      Last Name
                    </FormLabel>
                    <Field
                      as={Input}
                      id="lastName"
                      name="lastName"
                      type="text"
                    />
                    <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.displayName}>
                    <FormLabel
                      color="light.600"
                      _dark={{ color: 'dark.400' }}
                      htmlFor="email"
                    >
                      Display Name
                    </FormLabel>
                    <Field
                      as={Input}
                      id="displayName"
                      name="displayName"
                      type="text"
                    />
                    <FormErrorMessage>{errors.displayName}</FormErrorMessage>
                  </FormControl>

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
                  colorScheme='yellow'
                  _dark={{colorScheme: 'blue'}}
                  width="full"
                  isLoading={loading}
                  loadingText="Loading"
                >
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </CardBody>
        <CardFooter>
          <Flex alignItems={'center'}>
            <Text
              as={ReactLink}
              to="/login"
              _hover={{ transform: 'scale(1.2)' }}
            >
              Login?
            </Text>
            <Divider orientation="vertical" mr={'4'} ml={'4'} />
            <ColorModeSwitcher _hover={{ transform: 'scale(1.2)' }} />
          </Flex>
        </CardFooter>
      </Card>
    </Center>
  );
};

export default SignUp;
