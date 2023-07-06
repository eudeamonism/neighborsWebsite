import React from 'react';
import { useNavigate, Link as ReactLink, useLocation } from 'react-router-dom';
import { Formik, Field } from 'formik';
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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const SignLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Card height="auto" minW="300px" align="center" variant="elevated">
      <CardHeader>
        <Heading color={useColorModeValue('light.600', 'dark.400')}>
          Neighbors
        </Heading>
      </CardHeader>
      <CardBody>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={values => {
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={Yup.object({
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
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
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
                <FormControl isInvalid={!!errors.password && touched.password}>
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
            </form>
          )}
        </Formik>
        <Button
          mt="8"
          type="submit"
          variant="solid"
          colorScheme={useColorModeValue('yellow', 'blue')}
          width="full"
        >
          Login
        </Button>
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
      </CardFooter>
    </Card>
  );
};

export default SignLogin;
