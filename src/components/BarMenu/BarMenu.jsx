import { Flex, Text } from '@chakra-ui/react';

const BarMenu = () => {
  return (
    <Flex
      p="2"
      borderRight="1px"
      borderRightColor="gray"
      borderBottom="1px"
      borderBottomColor="gray"
      h='calc(100vh)'
    >
      <Flex direction="column">
        <Flex direction="column">
          <Text fontSize="larger">Profile</Text>
          <Flex mx="5" direction="column" gap="2">
            <Text>Edit Profile</Text>
          </Flex>
        </Flex>
        <Flex
          borderBottom="1px"
          borderBottomColor="gray"
          width="100%"
          mt="4"
          mb="2"
        />
        <Flex direction="column">
          <Text fontSize="larger">Complaints</Text>
          <Flex mx="5" direction="column" gap="2">
            <Text>My Complaints</Text>
            <Text>All Complaints</Text>
          </Flex>
        </Flex>
        <Flex
          borderBottom="1px"
          borderBottomColor="gray"
          width="100%"
          mt="4"
          mb="2"
        />
        <Flex direction="column">
          <Text fontSize="larger">Categories</Text>
          <Flex mx="5" direction="column">
            <Text>Illegal Dumping</Text>
            <Text>Excessive Noise</Text>
            <Text>Lewdness</Text>
            <Text>Public Intoxication</Text>
            <Text>Creeping</Text>
            <Text>Stalking</Text>
            <Text>Violence</Text>
            <Text>Theft</Text>
            <Text>Speeding</Text>
            <Text>Drugs</Text>
            <Text>Tenant Issues</Text>
            <Text>Abandoned Vehicles</Text>
            <Text>Fireworks</Text>
            <Text>Discrimination</Text>
            <Text>Unsanitary Conditions</Text>
            <Text>Public Nuisance</Text>
            <Text>Code Violations</Text>
            <Text>Salty</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BarMenu;
