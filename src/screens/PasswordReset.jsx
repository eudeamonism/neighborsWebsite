import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Spinner,
  useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { forgotTokenPassword, resetForgot } from '../redux/actions/userActions';
import OtbReset from './OtbReset';
import UpdatePassword from './UpdatePassword';

const PasswordReset = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { resetTokenEmail, loading } = user;

  const navigate = useNavigate();

  const toast = useToast();

  useEffect(() => {
    console.log(resetTokenEmail);
    if (resetTokenEmail === null) {
      console.log('resetTokenEmail === null');
    } else if (resetTokenEmail === 'notfound') {
      console.log('resetTokenEmail === notfound');
      dispatch(resetForgot());
      navigate('/');
      toast({
        title: 'Not found',
        description: 'Email not found!',
        status: 'error',
      });
    } else if (resetTokenEmail === 'locked') {
      toast({
        title: 'Locked out',
        description: 'Wait one minute. Too many attempts!',
        status: 'error',
      });
    } else if (resetTokenEmail?.stat === true) {
      toast({
        title: 'Sent',
        description: 'Check your email!',
        status: 'success',
      });
    }
  }, [dispatch, resetTokenEmail]);

  return (
    <>
      {resetTokenEmail === null ? (
        <Flex width="390px" height="844px" mt="50px" justify="center">
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
                    {loading === false ? (
                      <>
                        <Button colorScheme="green" type="submit">
                          Reset
                        </Button>
                        <Button colorScheme="red">Cancel</Button>
                      </>
                    ) : (
                      <Spinner />
                    )}
                  </Flex>
                </Form>
              )}
            </Formik>
          </Flex>
        </Flex>
      ) : resetTokenEmail && resetTokenEmail?.stat === 'true' ? (
        <OtbReset
          email={resetTokenEmail?.email}
        />
      ) : resetTokenEmail?.stat === 'change' ? (
        <UpdatePassword />
      ) : (
        <Text>Locked out. Button redirect.</Text>
      )}
    </>
  );
};

export default PasswordReset;
