import { useEffect } from 'react';
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
  Text,
  VStack,
  Spinner,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { forgotTokenPassword } from '../redux/actions/userActions';

const PasswordReset = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { resetTokenEmail, loading } = user;

  console.log(loading);
  return (
    <Flex width="390px" height="844px" mt="30%" justify="center">
      <Flex
        width="300px"
        height="360px"
        bg="blue.800"
        borderRadius="5"
        direction="column"
        alignItems="center"
      >
        <Text fontSize="2xl" mb="25px" mt="25px">
          Forgot Password?
        </Text>

        <Formik
          initialValues={{ email: '' }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email')
              .required('Enter an email to reset password.'),
          })}
          onSubmit={values => {
            dispatch(forgotTokenPassword(values.email));
          }}
        >
          {({ errors }) => (
            <Form as="form">
              <Flex direction="column">
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel
                    color="light.600"
                    _dark={{ color: 'white' }}
                    htmlFor="email"
                  >
                    Email Address
                  </FormLabel>
                  <Field as={Input} id="email" name="email" type="email" />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
              </Flex>
              <Flex direction="column" width="90px" gap="6" mt="25px">
                {loading === false ? <><Button colorScheme="green" type="submit">
                  Reset
                </Button>
                <Button colorScheme="red">Cancel</Button></> : <Spinner />}
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default PasswordReset;
