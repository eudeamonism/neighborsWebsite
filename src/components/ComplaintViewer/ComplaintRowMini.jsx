import { Flex, Text } from '@chakra-ui/react';

const ComplaintRowMini = ({ title, description }) => {
  return (
    <Flex width="390px" justifyContent="center">
      <Flex width="380px" justifyContent="center" mb="4" bg="gray.600" borderRadius="5px">
        <Flex width="370px" alignItems="center">
          <Flex direction="column" mb="1">
            <Text
              width="350px"
              fontWeight="medium"
              fontSize="lg"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              _focus={{ fontSize: '25px' }}
              mb="-1"
            >
              {title}
            </Text>

            <Text
              wordBreak="break-word"
              fontSize="md"
              width="375px"
              fontWeight="thin"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {description}
            </Text>
            <Text
              wordBreak="break-word"
              fontSize="md"
              width="375px"
              fontWeight="thin"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {description}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ComplaintRowMini;
