import { useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  SimpleGrid,
  Box,
  Select,
  useToast,
  HStack,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  AddComplaint,
  getAllComplaintsInDB,
  getCurrentComplaint

} from '../../redux/actions/complaintActions';
import { complaintTypes } from '../../data/complaintTypes';
import { defaultInitialValues } from '../../data/initialValues';



const ComplaintForm = ({ title }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const complaint = useSelector(state => state.complaint);

  const { openEditComplaint, loading, allComplaintData } = complaint;

  const { userInfo } = user;

  const userId = userInfo._id;

  //Left of puzzled on complaintId

if (openEditComplaint === true) {
  
}

  useEffect(() => {
    dispatch(getAllComplaintsInDB());
    
  }, []);

  let initialValues;

  if (openEditComplaint === false) {
    initialValues = {
      defaultInitialValues,
    };
  } else if (openEditComplaint === true) {
    initialValues = {
      title: allComplaintData.title,
      occurence: allComplaintData.occurence.split('T')[0],
      crossStreet1: allComplaintData.crossStreet1,
      crossStreet2: allComplaintData.crossStreet2,
      complaintType: complaintTypes[allComplaintData.complaintType],
      description: allComplaintData.description,
      imageUrl: allComplaintData.imageUrl,
      authoritiesNotified: allComplaintData.authoritiesNotified,
      resolved: allComplaintData.resolved,
    };
  }

  const formHandler = async () => {
    console.log('Hello!');
  };



  return (
    <Box
      ml="4"
      w="fixed"
      p="2"
      variant="elevated"
      outline="solid .1rem #C1C0C0"
      _dark={{ outline: 'solid 1.5px gray' }}
      borderRadius="8"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          resolved: Yup.boolean().required(),
          authoritiesNotified: Yup.boolean().required(),
          imageUrl: Yup.string().max(300, 'No more than 300 characters!'),
          title: Yup.string()
            .required('Please give complaint a title')
            .max(40, 'No more than 40 characters'),
          occurence: Yup.date().required('Please pick a date'),
          crossStreet1: Yup.string().required('Enter first street name only!'),
          complaintType: Yup.string().required(
            'Must select type of complaint.'
          ),
          description: Yup.string()
            .required('Please include a description.')
            .min(20, 'A minimum of 20 characters')
            .max(200, 'No more than 200 characters!'),
        })}
        onSubmit={values => {
          dispatch(
            AddComplaint(
              values.title,
              values.occurence,
              values.crossStreet1,
              values.crossStreet2,
              values.complaintType,
              values.description,
              values.imageUrl,
              values.authoritiesNotified,
              values.resolved,
              userInfo
            )
          );
        }}
      >
        {({ errors, touched }) => (
          <Form as="form">
            <Flex justifyContent="flex-end" mt="1" mr="1" minW="600px">
              <Icon
                as={CloseIcon}
                color="light.600"
                _dark={{ color: 'dark.400' }}
                _hover={{ fontSize: '20px' }}
                cursor="pointer"
                onClick={() => {
                  formHandler();
                }}
              />
            </Flex>
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
                  <Field
                    as={Input}
                    id="title"
                    name="title"
                    type="text"
                    placeholder={title}
                  />
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
                  <FormErrorMessage>{errors.crossStreet1}</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel
                    color="light.600"
                    _dark={{ color: 'dark.400' }}
                    htmlFor="email"
                    mt="2"
                  >
                    Intersection (not required)
                  </FormLabel>
                  <Field
                    as={Input}
                    id="crossStreet2"
                    name="crossStreet2"
                    type="text"
                  />
                </FormControl>
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
              </Box>

              <Box>
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
                    component="textarea"
                    rows="5"
                    cols="37"
                  />
                  <FormErrorMessage>{errors.description}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.imageUrl && touched.imageUrl}>
                  <FormLabel
                    color="light.600"
                    _dark={{ color: 'dark.400' }}
                    htmlFor="imageUrl"
                    mt="2"
                  >
                    Image URL (not required)
                  </FormLabel>
                  <Field as={Input} id="imageUrl" name="imageUrl" type="text" />
                  <FormErrorMessage>{errors.imageUrl}</FormErrorMessage>
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
                    <option value={false}>false</option>
                    <option value={true}>true</option>
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
                    <option value={false}>false</option>
                    <option value={true}>true</option>
                  </Field>
                </FormControl>
              </Box>
            </SimpleGrid>
            <HStack mt="8">
              <Button
                type="submit"
                variant="solid"
                width="full"
                isLoading={loading}
                onClick={() => {
                  toast({
                    title: 'Complaint Created',
                    status: 'success',
                    isClosable: 'true',
                    duration: 6000,
                  });
                }}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
            </HStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ComplaintForm;
