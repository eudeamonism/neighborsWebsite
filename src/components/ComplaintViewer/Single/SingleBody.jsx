import { Flex, Text, Image } from '@chakra-ui/react';

const SingleBody = () => {
  return (
    <Flex width="390px" height="774" direction="column">
      <Flex w="390px" height="90px" alignItems="center">
        <Text
          fontFamily="'Inter', sans-serif;"
          fontSize="36px"
          fontWeight="800"
          lineHeight="normal"
          ml="20px"
        >
          Nuisance
        </Text>
      </Flex>
      <Flex w="390px" height="144px" backgroundColor="blue.600">
        <Text
          fontFamily="'Inter', sans-serif;"
          fontSize="25px"
          fontWeight="500"
          lineHeight="normal"
          ml="20px"
          mt="10px"
          mr="10px"
        >
          How can anyone live liek this? Too much noise! All day, all the time,
          not a great place to be!
        </Text>
      </Flex>

      <Flex w="390px" height="50px" backgroundColor="yellow.600">
        <Text
          fontFamily="'Inter', sans-serif;"
          fontSize="25px"
          fontWeight="200"
          lineHeight="normal"
          ml="20px"
          mt="10px"
          mr="10px"
        >
          First Street and Main Street
        </Text>
      </Flex>
      <Flex w="390px" height="250px" justify="center">
        <Image
          src="assets/images/holder.jpg"
          alt="Placeholder"
          htmlWidth="345px"
          objectFit="scale-down"
        />
      </Flex>
      <Flex w="390px" height="240px" backgroundColor="blue.600">
        <Text
          fontFamily="'Inter', sans-serif;"
          fontSize="25px"
          fontWeight="200"
          lineHeight="normal"
          ml="20px"
          mt="10px"
          mr="10px"
        >
          How can anyone live liek this? Too much noise! All day, all the time,
          not a great place to be!
        </Text>
      </Flex>
    </Flex>
  );
};

export default SingleBody;
