import React from 'react';
import { Formik, Field } from 'formik';
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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const SignLogin = () => {
  return (
    <Card height="425px" width="300px" align="center" variant="elevated">
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
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    validate={value => {
                      let error;
                      if (value.length === 0) {
                        error = 'Please enter a valid email';
                      }
                      return error;
                    }}
                  />
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
                    validate={value => {
                      let error;

                      if (value.length < 8) {
                        error = 'Password must contain at least 8 characters';
                      }

                      return error;
                    }}
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
          colorScheme={useColorModeValue("yellow", "blue")}
          width="full"
        >
          Login
        </Button>
      </CardBody>
      <CardFooter>
        <Flex alignItems={'center'}>
          <Text>Sign Up?</Text>
          <ColorModeSwitcher />
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default SignLogin;
