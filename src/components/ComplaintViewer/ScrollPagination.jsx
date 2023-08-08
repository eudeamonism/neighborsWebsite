import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Flex,
  Text,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';

import { getAllComplaintsInDB } from '../../redux/actions/complaintActions';

const ScrollPagination = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const complaint = useSelector(state => state.complaint);
  const { allComplaintData, loading } = complaint;

  // `...?page=${pageNumber}&limit=${limitNumber}`

  const filter = (
    <>
      <Text onClick={onOpen}>Filter</Text>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay width="390px" height="844px" />
        <DrawerContent bgColor="blue.700" width="390px">
          <DrawerCloseButton />
          <DrawerBody>
            <Text
              onClick={() => {
                console.log('Most Recent');
              }}
              fontSize="xl"
            >
              My Complaints
            </Text>
            <Text
              onClick={() => {
                console.log('Most Recent');
              }}
              fontSize="xl"
            >
              By User
            </Text>
            <Text
              onClick={() => {
                console.log('Most Recent');
              }}
              fontSize="xl"
              mb="10px"
            >
              Oldest
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

  return (
    <Flex
      bg={useColorModeValue('red', 'purple.500')}
      width="60px"
      height="25px"
      alignItems="center"
      borderRadius="4"
      fontSize="xl"
      justify="center"
    >
      {filter}
    </Flex>
  );
};

export default ScrollPagination;
