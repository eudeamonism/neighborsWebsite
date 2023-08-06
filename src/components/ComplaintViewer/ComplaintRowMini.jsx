import { Flex, Text } from '@chakra-ui/react';


const ComplaintRowMini = ({ title, description, time }) => {
  function convertMilitaryToStandardTime(militaryTime) {
    var hour = parseInt(militaryTime.substring(0, 2));
    var minute = militaryTime.substring(3, 5);
    var period = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return hour + ':' + minute + ' ' + period;
  }

  console.log(convertMilitaryToStandardTime(time));

  return (
    <Flex width="390px" justifyContent="center">
      <Flex
        width="380px"
        justifyContent="center"
        mb="4"
        bg="gray.600"
        borderRadius="5px"
      >
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
            <Text
              wordBreak="break-word"
              fontSize="md"
              width="375px"
              fontWeight="thin"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {convertMilitaryToStandardTime(time)}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ComplaintRowMini;
