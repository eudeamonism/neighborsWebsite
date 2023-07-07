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
  Select,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { createComplaint } from '../../redux/actions/complaintActions';

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
        })}
        onSubmit={values => {
          dispatch(
            createComplaint(
              userInfo.token,
              values.title,
              values.occurence,
              values.crossStreet1,
              values.crossStreet2,
              values.complaintType,
              values.description,
              values.imageUrl,
              values.authoritiesNotified,
              values.resolved
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
                <FormControl isInvalid={!!errors.complaintType}>
                  <FormLabel
                    color="light.600"
                    _dark={{ color: 'dark.400' }}
                    htmlFor="email"
                  >
                    Complaint Type
                  </FormLabel>
                  <Field
                    as={Select}
                    id="complaintType"
                    name="complaintType"
                    type="complaintType"
                  >
                    <option value=""></option>
                    <option value="Excessive Noise">Excessive Noise</option>
                    <option value="Lewdness">Lewdness</option>
                    <option value="Public Intoxication">
                      Public Intoxication
                    </option>
                    <option value="Creeping">Creeping</option>
                    <option value="Stalking">Stalking</option>
                    <option value="Violence">Violence</option>
                    <option value="Theft">Theft</option>
                    <option value="Speeding">Speeding</option>
                    <option value="Drugs">Drugs</option>
                    <option value="Tenant Issues">Tenant Issues</option>
                    <option value="Abandoned Vehicles">
                      Abandoned Vehicles
                    </option>
                    <option value="Fireworks">Fireworks</option>
                    <option value="Discrimination">Discrimination</option>
                    <option value="Unsanitary Conditions">
                      Unsanitary Conditions
                    </option>
                    <option value="Public Nuisance">Public Nuisance</option>
                    <option value="Code Violations">Code Violations</option>
                    <option value="Salty">Salty</option>
                  </Field>
                  <FormErrorMessage>{errors.complaintType}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!errors.description && touched.description}
                >
                  <FormLabel
                    color="light.600"
                    _dark={{ color: 'dark.400' }}
                    htmlFor="description"
                    mt="2"
                  >
                    Description
                  </FormLabel>
                  <Field
                    as={Input}
                    id="description"
                    name="description"
                    type="text"
                  />
                  <FormErrorMessage>{errors.description}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel
                    color="light.600"
                    _dark={{ color: 'dark.400' }}
                    htmlFor="imageUrl"
                    mt="2"
                  >
                    Image URL
                  </FormLabel>
                  <Field as={Input} id="imageUrl" name="imageUrl" type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel
                    color="light.600"
                    _dark={{ color: 'dark.400' }}
                    htmlFor="authoritiesNotified"
                    mt="2"
                  >
                    Notified Authorities?
                  </FormLabel>
                  <Field
                    as={Select}
                    id="authoritiesNotified"
                    name="authoritiesNotified"
                    type="authoritiesNotified"
                  >
                    <option value="false">false</option>
                    <option value="true">true</option>
                  </Field>
                </FormControl>
                <FormControl>
                  <FormLabel
                    color="light.600"
                    _dark={{ color: 'dark.400' }}
                    htmlFor="resolved"
                    mt="2"
                  >
                    Resolved?
                  </FormLabel>
                  <Field
                    as={Select}
                    id="resolved"
                    name="resolved"
                    type="resolved"
                  >
                    <option value="false">false</option>
                    <option value="true">true</option>
                  </Field>
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
