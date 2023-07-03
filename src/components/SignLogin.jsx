import React from 'react';
import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  Checkbox,
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
  Center,
  Heading,
  Divider,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const SignLogin = () => {
  return (
    <Card height="425px" width="300px" align="center" variant="elevated">
      <CardHeader>
        <Heading>Login</Heading>
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
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="outline"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="outline"
                    validate={value => {
                      let error;

                      if (value.length < 6) {
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
        <Button mt="8" type="submit" colorScheme="purple" width="full">
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
