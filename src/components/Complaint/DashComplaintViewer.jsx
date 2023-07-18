import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { GiPoliceBadge } from 'react-icons/gi';
import {
  MaskSad,
  Crown,
  User,
  MarkerCircle,
  Trash,
  Signpost,
  Article,
  Hourglass,
} from '@phosphor-icons/react';

import {
  Box,
  useColorModeValue,
  Flex,
  Heading,
  Text,
  Spacer,
  Badge,
  Image,
  Divider,
  Icon,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';

import { useSelector, useDispatch } from 'react-redux';
import {
  deleteComplaint,
  closingForm,
  getComplaint,
} from '../../redux/actions/complaintActions';
import {
  decrementComplaint,
  resetUserId,
} from '../../redux/actions/userActions';

function DashComplaintViewer({
  complaintId,
  title,
  occurence,
  complaintType,
  description,
  imageUrl,
  police,
  resolved,
  mainStreet,
  secondStreet,
  isGuide,
  isAdmin,
  numberOfComplaints,
  displayName,
  updateSwitch,
  editForm,
}) {
  const user = useSelector(state => state.user);

  const { userInfo, loading, formClose, complaint } = user;
  const userId = userInfo._id;

  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const location = useLocation();

  const deleteHandler = () => {
    try {
      dispatch(deleteComplaint(complaintId));
      dispatch(decrementComplaint(userId));
      dispatch(resetUserId(userId));
      toast({
        description: 'Complaint deleted successfully',
        status: 'success',
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    } finally {
      onClose();
    }
  };

  const formHandler = () => {
    console.log("doodle")
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Complaint</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure?</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={deleteHandler}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box
        bg={useColorModeValue('gray.50', 'gray.600')}
        width="650px"
        height="auto"
        borderRadius="8"
      >
        <Flex>
          <Flex mt="2" ml="3" mb="2">
            <Heading
              fontSize="1.5em"
              fontFamily="font-family: 'Lato', sans-serif;"
              fontWeight="700"
              fontStyle="regular"
            >
              {title}
            </Heading>
          </Flex>
        </Flex>
        <Divider />
        <Flex mt="1">
          <Box ml="6">
            <Text
              fontSize="1em"
              fontFamily="font-family: 'Lato', sans-serif;"
              fontWeight="100"
              fontStyle="regular"
            >
              {new Date(occurence).toLocaleDateString()} |{' '}
              <Icon width="14px" height="14px" mr="1" as={GiPoliceBadge} />
              {police === true
                ? 'Authorities Notified'
                : 'No Authorities Notified'}
            </Text>
          </Box>
          <Spacer />
          <Flex
            mr="4"
            alignItems="center"
            fontSize="1em"
            fontFamily="font-family: 'Lato', sans-serif;"
            fontWeight="100"
            fontStyle="regular"
          >
            <Badge
              borderRadius="full"
              px="2"
              colorScheme={resolved === true ? 'green' : 'red'}
            >
              {resolved === true ? 'Resolved' : 'Unresolved'}
            </Badge>
          </Flex>
        </Flex>

        <Flex mb="1">
          <Flex ml="6" alignItems="center">
            <Text
              fontSize="1em"
              fontFamily="font-family: 'Lato', sans-serif;"
              fontWeight="100"
              fontStyle="regular"
              alignItems="center"
            >
              <Icon width="14px" height="14px" as={Signpost} />{' '}
              {`${mainStreet} at ${secondStreet}`}
            </Text>
          </Flex>

          <Spacer />
          <Flex
            mr="4"
            alignItems="center"
            fontSize="1em"
            fontFamily="font-family: 'Lato', sans-serif;"
            fontWeight="100"
            fontStyle="regular"
          >
            <Icon width="14px" height="14px" as={MaskSad} />
            <Text ml="1">{complaintType}</Text>
          </Flex>
        </Flex>
        <Divider />
        <Flex ml="2" mt="2" mr="2" mb="2">
          <Image
            grayscale="20%"
            border="1px solid gray"
            padding="5px"
            borderRadius="6px"
            width="200"
            height="120px"
            alt="Nuissance"
            src={imageUrl}
          />
          <Text ml="2" noOfLines="10">
            {description}
          </Text>
        </Flex>
        <Divider />

        <Flex gap="25px" justify="flex-end" alignItems="center" mb="2">
          <Flex gap="25px" ml="2">
            <Flex>
              <Icon
                boxSize={5}
                as={loading === false ? Trash : Hourglass}
                _hover={{ color: 'red' }}
                cursor="pointer"
                onClick={onOpen}
              />
            </Flex>
            <Flex>
              <Icon
                boxSize={5}
                as={MarkerCircle}
                _hover={{ color: 'green' }}
                cursor="pointer"
                onClick={() => {
                  formHandler();
                }}
              />
            </Flex>
          </Flex>
          <Spacer />
          <Flex alignItems="center">
            <Icon as={Article} mr="2" />
            <Text>{numberOfComplaints}</Text>
          </Flex>
          <Flex mr="25px" alignItems="center">
            {isGuide === true ? <Icon as={Crown} /> : <Icon as={User} mr="2" />}
            <Text>{displayName}</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default DashComplaintViewer;
