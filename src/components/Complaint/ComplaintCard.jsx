import { GiPoliceBadge } from 'react-icons/gi';
import { MaskSad, Crown, User } from '@phosphor-icons/react';
import { RiFootprintLine } from 'react-icons/ri';
import {
  Box,
  Text,
  Header,
  Heading,
  Center,
  Badge,
  Icon,
  HStack,
  Flex,
  Stack,
  Spacer,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

const ComplaintCard = ({ complaint: data }) => {
  return (
    <Stack
      minWidth="600px"
      maxW="600px"
      height="320px"
      borderWidth="1px"
      borderRadius="6"
      mt="12px"
    >
      <Box mt="3" ml="6">
        <Text
          fontSize="22px"
          color={useColorModeValue('light.500', 'dark.500')}
          fontWeight="bold"
        >
          {data.title}
        </Text>
      </Box>

      <Flex ml="24px">
        {data.resolved ? (
          <Badge borderRadius="full" px="2" colorScheme="green">
            Closed
          </Badge>
        ) : (
          <Badge borderRadius="full" px="2" colorScheme="red">
            Open
          </Badge>
        )}

        <Flex
          ml="3px"
          alignItems="center"
          color={useColorModeValue('light.300', 'dark.600')}
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
        >
          {data.occurence} &bull;
          <Icon ml="3px" width="14px" height="14px" as={GiPoliceBadge} />
          <Text ml="1px">Notified</Text>
        </Flex>
        <Spacer />
        <Flex
          mr="24px"
          alignItems="center"
          color={useColorModeValue('light.300', 'dark.600')}
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
        >
          <Icon
            ml="3px"
            width="20px"
            height="20px"
            as={MaskSad}
            weight="regular"
          />
          <Text fontSize="14px" ml="3px">
            {data.complaintType}
          </Text>
        </Flex>
      </Flex>
      <Flex
        ml="24px"
        alignItems="center"
        color={useColorModeValue('light.300', 'dark.600')}
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
      >
        <Icon ml="3px" width="14px" height="14px" as={RiFootprintLine} mr="6px"/>
        {data.location.crossStreet1} at {data.location.crossStreet2}
      </Flex>
      <Flex mt="15px" ml="24px" mr="24px">
        <Image
          fit="fill"
          width="250px"
          height="125px"
          src={data.details.imageUrl}
          alt="Theft"
        />
        <Text ml="6px"
        color={useColorModeValue('light.500', 'dark.500')}
        fontWeight="medium"
        >
         {data.details.description}
        </Text>
      </Flex>
      <Flex mt="15px" ml="24px" alignItems="center">
        <Spacer />
        <Icon
          mr="3px"
          width="20px"
          height="20px"
          as={User}
          weight="regular"
          color={useColorModeValue('light.500', 'dark.500')}
        />
        <Text
          fontWeight="medium"
          mr="24px"
          color={useColorModeValue('light.500', 'dark.500')}
        >
          {data.details.displayName}
        </Text>
      </Flex>
    </Stack>
  );
};

export default ComplaintCard;
