import { Image, Text, Flex, Card, CardBody, Box } from '@chakra-ui/react';

const PopularDetail = () => {
  const basicBoxStyles = {
    display: 'inline-block',
    boxSize: '200px',
    textShadow: '0 0 20px black',
    px: 4,
    background:
      'url(https://picsum.photos/id/1080/200/300) center/cover no-repeat',
  };
  return (
    <Flex direction="column" minW="200" minH="200" bg="blue">
      <Box sx={basicBoxStyles} filter="grayscale(80%)">
        <Flex direction="column" justify="flex-end">
          <Text fontWeight="bold" fontSize="18">
            Hello
          </Text>
          <Text>Hello donuts today</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default PopularDetail;

//<Image src="https://placehold.co/600x400" fit="cover" boxSize="100%" />
