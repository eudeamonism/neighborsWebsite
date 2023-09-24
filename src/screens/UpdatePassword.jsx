import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Card,
  CardHeader,
  CardBody,
  Heading,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';

import { resetPassword } from '../redux/actions/userActions';
//Need Toasts?

const UpdatePassword = () => {
  const dispatch = useDispatch();
  

  const user = useSelector(state => state.user);
  const { loading, resetTokenEmail } = user;

  const email = resetTokenEmail?.email;
  
  return (
    <Center minH={'100vh'}>
      <Card height="auto" width="300px" align="center" variant="elevated">
        <CardHeader>
          <Heading
            color={useColorModeValue('light.600', 'dark.400')}
            fontWeight="normal"
          >
            Update Password
          </Heading>
        </CardHeader>

        <CardBody>
          <Formik
            initialValues={{ password: '' }}
            validationSchema={Yup.object({
              password: Yup.string()
                .required('Please enter a password')
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                  'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
                ),
            })}
            onSubmit={values => {
              dispatch(resetPassword(values.password, email));
            }}
          >
            {({ errors, touched }) => (
              <Form as="form">
                <VStack>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel
                      color="light.600"
                      _dark={{ color: 'dark.400' }}
                      htmlFor="password"
                    >
                      Enter New Password
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
                  loadingText="Submitting..."
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </Center>
  );
};

export default UpdatePassword;
