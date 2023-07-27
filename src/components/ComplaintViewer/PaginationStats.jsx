import { useRef } from 'react';

import {
  Flex,
  Text,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  useDisclosure,
  DrawerHeader,
} from '@chakra-ui/react';

import { ArrowLeftIcon, ArrowRightIcon, UpDownIcon } from '@chakra-ui/icons';

const PaginationStats = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
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
      <Text>1</Text>
      <Text>2</Text>
      <Text>3</Text>
      <Text>4</Text>
      <Text>5</Text>
      <Text>6</Text>
      <Text>7</Text>
      <Text>8</Text>
      <ArrowRightIcon
        onClick={() => console.log('RightArrow Button clicked')}
      />

      <UpDownIcon onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Hello!</DrawerHeader>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default PaginationStats;
