import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Flex,
  Text,
  Image,
  useColorModeValue,
  Spinner,
  Divider,
} from '@chakra-ui/react';

import { GiPoliceBadge } from 'react-icons/gi';
import { FaSmile, FaSadTear } from 'react-icons/fa';

const AllComplaints = () => {
  const dispatch = useDispatch();
  const complaint = useSelector(state => state.complaint);
  const { loading, myComplaints, allComplaintData } = complaint;

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

  return (
    <>
      {allComplaintData.map(data => (
        <Flex
          bg="gray.50"
          _dark={{ backgroundColor: 'gray.600' }}
          mt="2"
          p="2"
          m="2"
          borderRadius="2"
          direction="column"
          key={data._id}
        >
          <Text fontStyle="oblique" fontWeight="medium">
            {data.title}
          </Text>
          <Divider m="1" />
          <Flex gap="2" align="center" fontSize="xs">
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
          <Flex fontSize="xs" gap="2">
            <Text>{data.crossStreet1}</Text>
            <Text>&</Text>
            <Text>{data.crossStreet2}</Text>
          </Flex>
          <Divider m="1" />
          <Image
            height="100px"
            width="150px"
            objectFit="cover"
            src={data.imageUrl}
            alt={data.title}
            m="1"
          />

          <Text fontSize="13px">{data.description}</Text>

          <Text fontSize="xs" mt="1" fontWeight="medium">
            -{data.displayName}
          </Text>
        </Flex>
      ))}
    </>
  );
};

export default AllComplaints;
