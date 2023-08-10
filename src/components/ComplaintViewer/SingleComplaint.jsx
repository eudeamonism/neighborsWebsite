import { useSelector } from 'react-redux';
import {
  Flex,
  useColorModeValue,
  Text,
  HStack,
  Icon,
  Image,
} from '@chakra-ui/react';
import { BiTime } from 'react-icons/bi';
import { GrUserAdmin, GrUser, GrOverview } from 'react-icons/gr';

const SingleComplaint = () => {
  const complaint = useSelector(state => state.complaint);
  const user = useSelector(state => state.user);
  const { userInfo } = user;
  const { singleComplaintData } = complaint;

  const userStatus =
    userInfo.isAdmin === true ? (
      <Icon as={GrUserAdmin} boxSize={6} ml="10px" />
    ) : userInfo.isGuide === true ? (
      <Icon as={GrOverview} boxSize={6} ml="10px" />
    ) : (
      <Flex bgColor='#faf7f5' p="4px" alignItems="center" borderRadius="4" ml="10px">
        <Icon as={GrUser} boxSize={6}/>
      </Flex>
    );
  const {
    authoritiesNotified,
    complaintType,
    createdAt,
    crossStreet1,
    crossStreet2,
    description,
    displayName,
    imageUrl,
    occurence,
    resolved,
    time,
    title,
    updatedAt,
    userId,
    _id,
  } = singleComplaintData;

  const singleNav = (
    <Flex
      bg={useColorModeValue('blue.200', '	#ff9933')}
      height="60px"
      alignItems="center"
      p="25px"
      justifyContent="space-between"
    >
      <Text
        fontSize="2xl"
        color={useColorModeValue('red', '#100f0e')}
        fontWeight="medium"
      >
        Edit
      </Text>
      <Text
        fontSize="2xl"
        color={useColorModeValue('red', '#100f0e')}
        fontWeight="medium"
      >
        Delete
      </Text>
      <Text
        fontSize="2xl"
        color={useColorModeValue('red', '#100f0e')}
        fontWeight="medium"
      >
        Close
      </Text>
    </Flex>
  );

  const date = new Date(occurence);
  const formattedDate = date.toISOString().substring(0, 10);

  function convertMilitaryToStandardTime(militaryTime) {
    var hour = parseInt(militaryTime.substring(0, 2));
    var minute = militaryTime.substring(3, 5);
    var period = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return hour + ':' + minute + ' ' + period;
  }

  const createdAtTime = createdAt => {
    const pureDate = new Date(createdAt);
    const time = pureDate.toLocaleTimeString().slice(0, 4);
    const timeOfDay = pureDate.toLocaleTimeString().slice(-3);

    //Completed Time
    const completeTime = time + timeOfDay;

    const date = pureDate.toLocaleDateString();

    console.log(date);

    return (
      <Flex gap="10px">
        <Text>{date}</Text>
        <Text>{completeTime}</Text>
      </Flex>
    );
  };

  console.log(userInfo);

  return (
    <Flex direction="column" width="390px">
      {singleNav}
      <Image src="assets/images/holder.jpg" />

      <Flex
        bg={useColorModeValue('blue.200', '	#4b4644')}
        p="5px"
        gap="10px"
        alignItems="center"
      >
        {userStatus}
        <Text
          color={useColorModeValue('blue.200', '	#ff9933')}
          fontSize="xl"
          fontWeight="medium"
        >
          {displayName}
        </Text>
      </Flex>

      <Flex
        bg={useColorModeValue('blue.200', '	#383230')}
        p="5px"
        gap="15px"
        alignItems="center"
      >
        <Text
          color={useColorModeValue('blue.200', '	#faf7f5')}
          fontSize="xl"
          ml="10px"
          fontWeight="medium"
        >
          Created on
        </Text>
        {createdAtTime(createdAt)}
      </Flex>

      <Flex
        bg={useColorModeValue('blue.200', '	#4b4644')}
        p="5px"
        gap="15px"
        alignItems="center"
      >
        <Text
          color={useColorModeValue('blue.200', '	#faf7f5')}
          fontSize="xl"
          ml="10px"
          fontWeight="medium"
        >
          Resolved?
        </Text>
        <Text fontSize="xl" color={resolved ? 'green' : 'red'}>
          {authoritiesNotified ? 'Yes' : 'No'}
        </Text>
      </Flex>
      <Flex
        bg={useColorModeValue('blue.200', '	#383230')}
        p="5px"
        gap="15px"
        alignItems="center"
      >
        <Text
          color={useColorModeValue('blue.200', '	#faf7f5')}
          fontSize="xl"
          ml="10px"
          fontWeight="medium"
        >
          Authorities Notified?
        </Text>
        <Text fontSize="xl" color={authoritiesNotified ? 'green' : 'red'}>
          {authoritiesNotified ? 'Yes' : 'No'}
        </Text>
      </Flex>
      <Flex
        bg={useColorModeValue('blue.200', '	#4b4644')}
        p="5px"
        gap="15px"
        alignItems="center"
      >
        <Text
          color={useColorModeValue('blue.200', '	#faf7f5')}
          fontSize="xl"
          ml="10px"
          fontWeight="medium"
        >
          Complaint Type:
        </Text>
        <Text fontSize="xl">{complaintType}</Text>
      </Flex>

      <Flex
        bg={useColorModeValue('blue.200', '	#383230')}
        p="5px"
        alignItems="center"
      >
        <Text fontSize="xl" ml="10px" fontWeight="medium">
          Occurred
        </Text>
        <Text fontSize="xl" ml="15px" mr="15px">
          {formattedDate}
        </Text>
        <Icon as={BiTime} boxSize={6} />
        <Text ml="5px">{convertMilitaryToStandardTime(time)} </Text>
      </Flex>
      <Flex
        bg={useColorModeValue('blue.200', '	#4b4644')}
        p="5px"
        gap="15px"
        alignItems="center"
      >
        <Text
          color={useColorModeValue('blue.200', '	#faf7f5')}
          fontSize="xl"
          ml="10px"
          fontWeight="medium"
        >
          Main Street:
        </Text>
        <Text>{crossStreet1}</Text>
      </Flex>
      <Flex
        bg={useColorModeValue('blue.200', '	#383230')}
        p="5px"
        alignItems="center"
        gap="15px"
      >
        <Text fontSize="xl" ml="10px" fontWeight="medium">
          Cross Street:
        </Text>
        <Text>{crossStreet2 === '' ? 'N/A' : crossStreet2}</Text>
      </Flex>
    </Flex>
  );
};

export default SingleComplaint;
