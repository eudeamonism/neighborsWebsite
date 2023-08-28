import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

import UploadWidget from '../../Widgets/UploadWidget';

import {
  Flex,
  FormLabel,
  Input,
  Text,
  FormControl,
  FormErrorMessage,
  Button,
  Select,
  Textarea,
} from '@chakra-ui/react';

const MobileForm = () => {
  const complaint = useSelector(state => state.complaint);
  const user = useSelector(state => state.user);
  const { imageUrl } = complaint;
  const { userInfo } = user;

  console.log(userInfo);
  return (
    <Flex
      direction="column"
      mt="25px"
      fontFamily="'Inter', sans-serif;"
      w="390px"
    >
      <Flex justify="center">
        <Text fontSize="24px">Testing Form</Text>
      </Flex>

      <Formik
        initialValues={{ title: 'A great title for this complaint!' }}
        validationSchema={Yup.object({
          title: Yup.string().required(
            'A title for this complaint is required.'
          ),
          complaintType: Yup.string().required('Pick a complaint!'),
          occurence: Yup.date().required('Select a date for this complaint.'),
          time: Yup.string().required('Select a time for this complaint.'),
          description: Yup.string()
            .required('Please describe the complaint. ADD NUMBER LIMIT')
            .min(21, 'Twenty characters minimum!')
            .max(199, 'Two hundred characters maximum!'),
        })}
        onSubmit={values => {
          console.log(values);
          console.log(imageUrl);
        }}
      >
        {({ errors, touched }) => (
          <Form as="form">
            <Flex
              m="25px"
              fontFamily="'Inter', sans-serif;"
              direction="column"
              gap="20px"
            >
              <FormControl isInvalid={!!errors.title && touched.title}>
                <FormLabel htmlFor="title">Title of Complaint</FormLabel>
                <Field
                  as={Input}
                  id="title"
                  name="title"
                  type="text"
                  variant="filled"
                  focusBorderColor="green.400"
                  errorBorderColor="red.600"
                />
                <FormErrorMessage>{errors.title}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!errors.complaintType && touched.complaintType}
              >
                <FormLabel htmlFor="complaintType">
                  Type of Complaint (Pick One)
                </FormLabel>
                <Field
                  as={Select}
                  id="complaintType"
                  name="complaintType"
                  type="complaintType"
                  variant="filled"
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

              <FormControl isInvalid={!!errors.occurence && touched.occurence}>
                <FormLabel htmlFor="occurence">Date of Complaint</FormLabel>
                <Field
                  as={Input}
                  id="occurence"
                  name="occurence"
                  type="date"
                  variant="filled"
                  focusBorderColor="green.400"
                  errorBorderColor="red.600"
                />
                <FormErrorMessage>{errors.occurence}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.time && touched.time}>
                <FormLabel htmlFor="time">Time of Complaint</FormLabel>
                <Field
                  as={Input}
                  id="time"
                  name="time"
                  type="time"
                  variant="filled"
                  focusBorderColor="green.400"
                  errorBorderColor="red.600"
                />
                <FormErrorMessage>{errors.occurence}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!errors.description && touched.description}
              >
                <FormLabel htmlFor="description">
                  Description of the Complaint
                </FormLabel>
                <Field
                  as={Textarea}
                  id="description"
                  name="description"
                  type="text"
                  variant="filled"
                  focusBorderColor="green.400"
                  errorBorderColor="red.600"
                  rows="5"
                />
                <FormErrorMessage>{errors.description}</FormErrorMessage>
              </FormControl>

              <UploadWidget />
            </Flex>

            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};

export default MobileForm;
