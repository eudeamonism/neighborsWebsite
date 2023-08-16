import { useNavigate } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';

const SingleNav = () => {
  const navigate = useNavigate();
  return (
    <Flex width="390px" justify="space-between" mt="20px" mb="20px">
      <Flex>
        <Flex
          width="130px"
          height="70px"
          bg="#2371E4"
          borderRadius="15px"
          alignItems="center"
          justify="center"
          mx="20px"
        >
          <Text
            fontFamily="'Inter', sans-serif;"
            fontSize="48px"
            fontWeight="700"
            lineHeight="normal"
          >
            Edit
          </Text>
        </Flex>
      </Flex>

      <Flex
        width="70px"
        height="70px"
        bg="#E42323"
        borderRadius="15px"
        alignItems="center"
        justify="center"
        mr="20px"
        onClick={() => {
          navigate('/dashboard');
        }}
      >
        <Text
          fontFamily="'Inter', sans-serif;"
          fontSize="48px"
          fontWeight="700"
          lineHeight="normal"
        >
          X
        </Text>
      </Flex>
    </Flex>
  );
};

export default SingleNav;
