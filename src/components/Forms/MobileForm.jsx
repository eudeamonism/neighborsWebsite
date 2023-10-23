import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Select,
} from '@chakra-ui/react';

import UploadWidget from '../../Widgets/UploadWidget';

const MobileForm = () => {
  return (
    <Flex direction="column" w="100%" p="6">
      <VStack mb="10px">
        <Text fontWeight="bold" fontSize="18px">
          {' '}
          Complaint Form
        </Text>
      </VStack>
      <Formik
        initialValues={{
          title: '',
          occurence: '',
          street: '',
          cross: '',
          complaintType: '',
          description: '',
          imageUrl: '',
          authorities: '',
          resolved: '',
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string()
            .required('Please give complaint a title')
            .max(40, 'No more than 40 characters'),
          occurence: Yup.date().required('Please pick a date'),
          street: Yup.string().required('Required'),
          cross: Yup.string().required('Required'),
          complaintType: Yup.string().required(
            'Must select type of complaint.'
          ),
          /* description: Yup.string()
            .required('Please include a description.')
            .min(20, 'A minimum of 20 characters')
            .max(200, 'No more than 200 characters!'), */
        })}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ handleSubmit, errors, isValid, dirty }) => (
          <form onSubmit={handleSubmit}>
            <VStack border="1px" borderColor="gray.700" p="5" borderRadius="8">
              <FormControl isInvalid={!!errors.title}>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Field
                  as={Input}
                  id="title"
                  name="title"
                  type="text"
                  placeHolder="Complaint's Title"
                />
                <FormErrorMessage>{errors.title}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.occurence}>
                <FormLabel htmlFor="occurence">Occurence</FormLabel>
                <Field
                  as={Input}
                  id="occurence"
                  name="occurence"
                  type="date"
                  placeHolder="Complaint's occurence"
                />
                <FormErrorMessage>{errors.occurence}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.street}>
                <FormLabel htmlFor="street">Street</FormLabel>
                <Field
                  as={Input}
                  id="street"
                  name="street"
                  type="text"
                  placeHolder="Complaint's street"
                />
                <FormErrorMessage>{errors.street}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.cross}>
                <FormLabel htmlFor="cross">Cross Street</FormLabel>
                <Field
                  as={Input}
                  id="cross"
                  name="cross"
                  type="text"
                  placeHolder="Intersecting Street"
                />
                <FormErrorMessage>{errors.cross}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.complaintType}>
                <FormLabel htmlFor="complaintType">Complaint Type</FormLabel>
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
                  <option value="Abandoned Vehicles">Abandoned Vehicles</option>
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
              <UploadWidget />

              <Button type="submit" width="full" isDisabled={!dirty || !isValid}>
                Submit
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Flex>
  );
};

export default MobileForm;

//Must insert field one at a time, or YUP will cause button not to submit values
//isDisabled needs to be or double pipe operator, or button disabling will not function properly