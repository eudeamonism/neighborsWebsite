import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Text, Image, Spinner, Divider, VStack } from '@chakra-ui/react';
import {
  deleteComplaint,
  myDBComplaints,
} from '../../../redux/actions/complaintActions';
import { GiPoliceBadge } from 'react-icons/gi';
import { FaSmile, FaSadTear } from 'react-icons/fa';

const MyComplaints = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const complaint = useSelector(state => state.complaint);
  const user = useSelector(state => state.user);
  const { userInfo } = user;
  const { loading, myComplaints, error } = complaint;
  const token = userInfo.token;
  const refresh = userInfo.refresh;

  console.log(userInfo);

  useEffect(() => {
    dispatch(myDBComplaints(token, refresh));
  }, []);

  function militaryTimeToRegularTime(militaryTime) {
    // Check if the input is a valid military time string.
    if (!/^\d{2}:\d{2}$/.test(militaryTime)) {
      return militaryTime;
    }

    // Split the military time string into hours and minutes.
    const [hours, minutes] = militaryTime.split(':');

    // Convert the hours to 12-hour time.
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const regularHours = hours % 12 === 0 ? 12 : hours % 12;

    // Add a leading zero to the minutes if necessary.
    const formattedMinutes = minutes.length === 1 ? `0${minutes}` : minutes;

    // Return the converted regular time string.
    return `${regularHours}:${formattedMinutes}${amPm}`;
  }
  console.log(myComplaints);
  return (
    <VStack>
      {myComplaints.length === 0 ? (
        <Flex
          justify="center"
          p="2"
          bg="gray.200"
          _dark={{ backgroundColor: 'gray.600' }}
        >
          <Text>No Complaints</Text>
        </Flex>
      ) : null}
      {myComplaints.map(data => (
        <Flex
          bg="gray.50"
          _dark={{ backgroundColor: 'gray.600' }}
          mt="2"
          p="2"
          m="2"
          borderRadius="2"
          direction="column"
          key={data._id}
          w={{ md: '600px', lg: '750px' }}
        >
          <Text fontStyle="oblique" fontSize={{ md: '20px', lg: '22px' }}>
            {data.title}
          </Text>
          <Divider m="1" />
          <Flex gap="2" align="center" fontSize={{ md: '14px', lg: '16px' }}>
            <Text fontWeight="medium">{data.complaintType}</Text>
            <Text>{new Date(data.occurence).toISOString().split('T')[0]}</Text>
            <Text>{militaryTimeToRegularTime(data.time)}</Text>
            <GiPoliceBadge
              color={data.authoritiesNotified ? '#86DC3D' : 'gray'}
            />
            {data.resolved === true ? (
              <Text color="#ffc40c" _dark={{ color: 'yellow.300' }}>
                <FaSmile />
              </Text>
            ) : (
              <Text color="blue.500" _dark={{ color: 'blue.200' }}>
                <FaSadTear />
              </Text>
            )}
          </Flex>
          <Flex fontSize={{ md: '12px', lg: '14px' }} gap="2">
            <Text>{data.crossStreet1}</Text>
            <Text>&</Text>
            <Text>{data.crossStreet2}</Text>
          </Flex>
          <Divider m="1" />
          <Image
            height={{ base: '100', md: '150px', lg: '200px' }}
            width={{ base: '150px', md: '200px', lg: '300px' }}
            objectFit="cover"
            src={data.imageUrl}
            alt={data.title}
            m="1"
          />

          <Text fontSize={{ md: '14px', lg: '16px' }}>{data.description}</Text>

          <Text fontSize={{ md: 'sm', lg: 'md' }} mt="1" fontWeight="medium">
            -{data.displayName}
          </Text>
          <Flex gap="2" mt="2">
            <Flex
              bg="red.100"
              _dark={{ backgroundColor: 'red.300' }}
              p="1"
              borderRadius="2"
              onClick={() => {
                dispatch(deleteComplaint(data._id));
              }}
            >
              <Text fontSize={{ md: 'md', lg: 'lg' }}>
                {loading === false ? 'Delete' : <Spinner />}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </VStack>
  );
};

export default MyComplaints;
