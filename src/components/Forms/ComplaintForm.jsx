import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  useColorModeValue,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/userActions';

const ComplaintForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { loading, error, userInfo, complaints } = user;

  return (
    <Box
      w="fixed"
      p="2"
      variant="elevated"
      bg={useColorModeValue('gray.200', 'gray.600')}
      borderRadius="8"
    >
      <Formik
        initialValues={{
          title: 'Title',
          occurence: '',
          crossStreet1: 'Street 1',
          crossStreet2: 'Street 2',
          complaintType: 'Selector',
          description: 'Describe...',
          imageUrl: 'link',
          authoritiesNotified: 'Boolean',
          resolved: 'Boolean',
          lastName: 'Last Name',
          displayName: 'Display Name',
          email: 'user@gmail.com',
          password: '',
        }}
        validationSchema={Yup.object({
          title: Yup.string().required('Please give complaint a title'),
          occurence: Yup.date().required('Please pick a date'),
          crossStreet1: Yup.string().required('Enter first street name only!'),
          crossStreet2: Yup.string().required('Enter second street name only!'),
          complaintType: Yup.string().required(
            'Must select type of complaint.'
          ),
          description: Yup.string().required(
            'Description is either too long or too short (20 characters).'
          ),
          lastName: Yup.string().required('Please enter your last name'),
          displayName: Yup.string().required('Please enter your display name'),
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
            <SimpleGrid columns={2} spacing={5}>
              <Box>
                <FormControl isInvalid={!!errors.title}>
                  <FormLabel
                    color="light.600"
                    _dark={{ color: 'dark.400' }}
                    htmlFor="title"
                  >
                    Title
                  </FormLabel>
                  <Field as={Input} id="title" name="title" type="text" />
                  <FormErrorMessage>{errors.title}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.occurence}>
                  <FormLabel
                    color="light.600"
                    _dark={{ color: 'dark.400' }}
                    htmlFor="occurence"
                    mt="2"
                  >
                    Date
                  </FormLabel>
                  <Field
                    as={Input}
                    id="occurence"
                    name="occurence"
                    type="date"
                    
                  />
                  <FormErrorMessage>{errors.occurence}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.crossStreet1}>
                  <FormLabel
                    color="light.600"
                    _dark={{ color: 'dark.400' }}
                    htmlFor="email"
                    mt="2"
                  >
                    Main Street
                  </FormLabel>
                  <Field
                    as={Input}
                    id="crossStreet1"
                    name="crossStreet1"
                    type="text"
                  />
                  <FormErrorMessage>{errors.crossStreet2}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.crossStreet2}>
                  <FormLabel
                    color="light.600"
                    _dark={{ color: 'dark.400' }}
                    htmlFor="email"
                    mt="2"
                  >
                    Intersecting Street
                  </FormLabel>
                  <Field
                    as={Input}
                    id="crossStreet2"
                    name="crossStreet2"
                    type="text"
                  />
                  <FormErrorMessage>{errors.crossStreet2}</FormErrorMessage>
                </FormControl>
              
              </Box>

              <Box>
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
                    mt="2"
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
              </Box>
            </SimpleGrid>

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
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ComplaintForm;
