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
  Spacer,
  Spinner,
  VStack,
} from '@chakra-ui/react';

import { getAllComplaintsInDB } from '../../redux/actions/complaintActions';

import { ArrowLeftIcon, ArrowRightIcon, UpDownIcon } from '@chakra-ui/icons';

const TestPaginationStats = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const complaint = useSelector(state => state.complaint);
  const { allComplaintData, loading } = complaint;

  const pageNumbers = [];

  if (allComplaintData !== null) {
    for (let i = 1; i <= allComplaintData.totalDocs; i++) {
      if (i <= allComplaintData.totalPages) {
        pageNumbers.push(
          <Text 
            key={i}
            onClick={() => {
              console.log(`clicked ${i}`);
            }}
            fontSize={i === allComplaintData.page ? '2xl' : 'medium'}
          >
            {i}
          </Text>
        );
      }
    }
  }

  // `...?page=${pageNumber}&limit=${limitNumber}`

  const pageHandler = async page => {
    await dispatch(getAllComplaintsInDB(page));
  };

  const filter = (
    <>
      <UpDownIcon onClick={onOpen} mr="8px" />
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Text
              onClick={() => {
                console.log('Most Recent');
              }}
              fontSize="xl"
            >
              Most Recent
            </Text>
            <Text
              onClick={() => {
                console.log('Most Recent');
              }}
              fontSize="xl"
            >
              Oldest
            </Text>
            <Text
              onClick={() => {
                console.log('Most Recent');
              }}
              fontSize="xl"
              mb="10px"
            >
              By User
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

  const prevnext = (
    <>
      <VStack>
        {allComplaintData && allComplaintData.hasPrevPage === true ? (
          <ArrowLeftIcon
            ml="8px"
            onClick={() => {
              pageHandler(allComplaintData.prevPage);
            }}
          />
        ) : (
          <ArrowLeftIcon ml="8px" opacity=".5" />
        )}

        {allComplaintData && allComplaintData.hasNextPage === true ? (
          <ArrowRightIcon
            onClick={() => {
              pageHandler(allComplaintData.nextPage);
            }}
            ml="8px"
          />
        ) : (
          <ArrowRightIcon ml="8px" opacity=".5" />
        )}
      </VStack>
    </>
  );

  const dataList = (
    <>
      {allComplaintData ? (
        <Flex minW="150px" gap="2" flexWrap="wrap">
          {pageNumbers}
        </Flex>
      ) : loading === true ? (
        <Spinner />
      ) : null}
    </>
  );

  console.log(allComplaintData);
  return (
    <Flex
      bg="blue.800"
      width="380px"
      height="60px"
      p="1"
      alignItems="center"
      gap="5"
      borderRadius="4"
      fontSize="xl"
    >
      {prevnext}
      {dataList}
      <Spacer />
      {filter}
    </Flex>
  );
};

export default TestPaginationStats;
