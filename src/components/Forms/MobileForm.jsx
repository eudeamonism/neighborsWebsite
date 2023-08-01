import React from 'react';
import {
  Flex,
  useColorModeValue,
  FormControl,
  Text,
  Button,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { complaintTypes } from '../../data/complaintTypes';
import TextField from '../FormikFields/TextField';

const MobileForm = () => {
  const defaultValues = {
    title: '',
    occurence: '',
    complaintType: '',
    description: '',
    imageUrl: '',
    authorities: false,
    resolved: false,
    crossStreet1: '',
    crossStreet2: '',
  };

  const complaintTypeOptions = Object.keys(complaintTypes).map(
    complaintType => ({
      label: complaintTypes[complaintType],
      value: complaintTypes[complaintType],
    })
  );

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={Yup.object({
        resolved: Yup.boolean().required(),
        authorities: Yup.boolean().required(), // Corrected authoritiesNotified to authorities
        imageUrl: Yup.string().max(300, 'No more than 300 characters!'),
        title: Yup.string()
          .required('Please give complaint a title')
          .max(40, 'No more than 40 characters'),
        occurence: Yup.date().required('Please pick a date'),
        crossStreet1: Yup.string().required('Enter first street name only!'),
        complaintType: Yup.string().required('Must select type of complaint.'),
        description: Yup.string()
          .required('Please include a description.')
          .min(20, 'A minimum of 20 characters')
          .max(200, 'No more than 200 characters!'),
      })}
      onSubmit={values => {
        console.log('Form values:', values);
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Flex direction="column">
            <Flex
              alignItems="center"
              bgColor={useColorModeValue('#d2e5ff', '#ca9615')}
              height="55px"
              mb="15px"
              width="390px"
              justify="space-between"
            >
              <ColorModeSwitcher />
              <Text fontSize="2xl" fontWeight="medium">
                Add a Complaint
              </Text>

              <Text fontSize="3xl" marginRight="10px">
                X
              </Text>
            </Flex>
            <Flex width="390px" justify="center">
              <Flex
                width="350px"
                direction="column"
                alignItems="center"
                justify="center"
              >
                <TextField
                  name="title"
                  type="text"
                  label="Title"
                />
                <TextField
                  name="occurence"
                  type="date"
                  label="Date"
                />
                <TextField
                  name="complaintType"
                  type="select"
                  label="Complaint Type"
                  options={complaintTypeOptions}
                />
                <TextField
                  name="description"
                  type="text"
                  label="Description"
                />
                <TextField
                  name="imageUrl"
                  type="text"
                  label="Image URL"
                />
                <TextField
                  name="authorities" // Corrected name to "authorities"
                  type="checkbox"
                  label="Authorities Notified"
                />
                <TextField
                  name="resolved"
                  type="checkbox"
                  label="Resolved"
                />
                <TextField
                  name="crossStreet1"
                  type="text"
                  label="Street"
                />
                <TextField
                  name="crossStreet2"
                  type="text"
                  label="Cross Street"
                />
                <Button
                  width="350px"
                  height="50px"
                  colorScheme="blue"
                  mt="20px"
                  type="submit"
                >
                  Submit
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default MobileForm;
