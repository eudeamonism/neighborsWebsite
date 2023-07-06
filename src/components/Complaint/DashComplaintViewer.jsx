import { GiPoliceBadge } from 'react-icons/gi';
import { MaskSad, Crown, User } from '@phosphor-icons/react';
import { RiFootprintLine } from 'react-icons/ri';

import {
  VStack,
  Box,
  useColorModeValue,
  Flex,
  HStack,
  Heading,
  Text,
  Stack,
  Icon,
  Spacer,
  Badge,
  Image,
  Card
} from '@chakra-ui/react';
import { complaints } from '../../data/compliants';

const DashComplaintViewer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.200', 'gray.600')}
      width="650px"
      height="auto"
      borderRadius="8"
    >
      <Flex>
        <Flex mt="2" ml="3" mb="1">
          <Heading
            fontSize="1.5em"
            fontFamily="font-family: 'Lato', sans-serif;"
            fontWeight="700"
            fontStyle="regular"
          >
            Loud music playing throuhgout the night
          </Heading>
        </Flex>
      </Flex>

      <Flex>
        <Box ml="6">
          <Text
            fontSize="1em"
            fontFamily="font-family: 'Lato', sans-serif;"
            fontWeight="100"
            fontStyle="regular"
          >
            Last Week | Authorities Notified
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
          <Badge borderRadius="full" px="2" colorScheme="green">
            Closed
          </Badge>
        </Flex>
      </Flex>

      <Flex>
        <Box ml="6">
          <Text
            fontSize="1em"
            fontFamily="font-family: 'Lato', sans-serif;"
            fontWeight="100"
            fontStyle="regular"
          >
            Main Street at Baird Street
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
          <Icon width="14px" height="14px" as={GiPoliceBadge} />
          <Text ml="1">Nuisance</Text>
        </Flex>
      </Flex>
      <Flex ml="2" mt="2" mr="2">
        <Image
          border="1px solid gray"
          padding="5px"
          borderRadius="6px"
          width="200"
          height="120px"
          alt="Nuissance"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._Kc00wIUY3OfnPOaicufBgHaEh%26pid%3DApi%26h%3D160&f=1&ipt=c9e07fd7f55a025d73ecddb3347d18563499f74d13374ec55f32f69277c10cfc&ipo=images"
        />
        <Text ml="2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque
          commodi, sapiente quia asperiores reiciendis labore corrupti voluptas!
          Minus maxime asperiores ipsum enim nam temporibus vel illum inventore
          dicta numquam?
        </Text>
      </Flex>
      <Flex
        mr="4"
        mb="2"
        alignItems="center"
        fontSize="1em"
        fontFamily="font-family: 'Lato', sans-serif;"
        fontWeight="700"
        fontStyle="bold"
      >
        <Spacer />
        <Icon width="14px" height="14px" as={Crown} />
        <Text ml="1" >Tomato Head</Text>
      </Flex>
    </Box>
  );
};

export default DashComplaintViewer;
