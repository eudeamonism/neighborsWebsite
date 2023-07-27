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
} from '@chakra-ui/react';

import { ArrowLeftIcon, ArrowRightIcon, UpDownIcon } from '@chakra-ui/icons';

const PaginationStats = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const complaint = useSelector(state => state.complaint);
  const { allComplaintData } = complaint;

  const pageNumbers = [];
  if (allComplaintData !== null) {
    for (let i = 1; i <= allComplaintData.pagingCounter; i++) {
      if (i <= 8) {
        pageNumbers.push(
          <Text
            key={i}
            onClick={() => {
              console.log(`clicked ${i}`);
            }}
          >
            {i}
          </Text>
        );
      }
    }
  }

  console.log(allComplaintData);
// `...?page=${pageNumber}&limit=${limitNumber}`
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
      
      <ArrowLeftIcon
        onClick={() => console.log('RightArrow Button clicked')}
        ml="8px"
      />
      {allComplaintData ? pageNumbers : null}
      <ArrowRightIcon
        onClick={() => console.log('RightArrow Button clicked')}
      />
      <Spacer />
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
    </Flex>
  );
};

export default PaginationStats;
