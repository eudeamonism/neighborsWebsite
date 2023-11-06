import { useSelector } from 'react-redux';
import { Flex, Text, Image } from '@chakra-ui/react';
import { GiPoliceBadge } from 'react-icons/gi';
import { FaSmile, FaSadTear } from 'react-icons/fa';

const MyComplaints = () => {
  const complaint = useSelector(state => state.complaint);
  const { loading, myComplaints } = complaint;

  function militaryTimeToRegularTime(militaryTime) {
    // Check if the input is a valid military time string.
    if (!/^\d{2}:\d{2}$/.test(militaryTime)) {
      return militaryTime;
    }
  
    // Split the military time string into hours and minutes.
    const [hours, minutes] = militaryTime.split(":");
  
    // Convert the hours to 12-hour time.
    const amPm = hours >= 12 ? "PM" : "AM";
    const regularHours = hours % 12 === 0 ? 12 : hours % 12;
  
    // Add a leading zero to the minutes if necessary.
    const formattedMinutes = minutes.length === 1 ? `0${minutes}` : minutes;
  
    // Return the converted regular time string.
    return `${regularHours}:${formattedMinutes}${amPm}`;
  }
  
  
  

console.log(myComplaints)



  const testData = [
    {
      _id: 1,
      displayName: 'Toasty Dude!',
      title: 'Stolen pecans!',
      occurence: '2023-10-31T00:00:00.000+00:00',
      time: '10:25',
      complaintType: [0, 'Speeding'],
      description: 'A good harvest taken from my lawn without permission.',
      imageUrl: '/assets/images/holder.jpg',
      authoritiesNotified: 'true',
      resolved: 'false',
      crossStreet1: 'Big Tree St.',
      crossStreet2: 'Small Tree St.',
    },
    {
      _id: 2,
      displayName: 'Burglar Bob',
      title: 'Gifted Pecans!',
      occurence: '2023-10-31T00:00:00.000+00:00',
      time: '12:25',
      complaintType: [0, 'Speeding'],
      description:
        'I was given permission by public property lines! The pecans were on the street!',
      imageUrl: '/assets/images/holder.jpg',
      authoritiesNotified: 'true',
      resolved: 'true',
      crossStreet1: 'Big Tree St.',
      crossStreet2: 'Small Tree St.',
    },
    {
      _id: 3,
      displayName: 'Burglar Bob',
      title: 'Gifted Pecans!',
      occurence: '2023-10-31T00:00:00.000+00:00',
      time: '12:25',
      complaintType: [0, 'Speeding'],
      description:
        'I was given permission by public property lines! The pecans were on the street!',
      imageUrl: '/assets/images/holder.jpg',
      authoritiesNotified: 'true',
      resolved: 'true',
      crossStreet1: 'Big Tree St.',
      crossStreet2: 'Small Tree St.',
    },
  ];
  return (
    <>
      {myComplaints.map(data => (
        <Flex
          bg="gray.600"
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
          <Flex gap="2" align="center" fontSize="xs">
            <Text fontWeight="medium">{data.complaintType[1]}</Text>
            <Text>{new Date(data.occurence).toISOString().split("T")[0]}</Text>
            <Text>{militaryTimeToRegularTime(data.time)}</Text>
            <GiPoliceBadge />
            <FaSadTear />
          </Flex>
          <Image
            height="100px"
            width="150px"
            objectFit="cover"
            src="/assets/images/holder.jpg"
            alt="Dan Abramov"
          />
          <Flex fontSize="xs" gap="2">
            <Text>Maple St</Text>
            <Text>&</Text>
            <Text>Green St</Text>
          </Flex>
          <Text fontSize="13px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            neque saepe similique sequi ipsa nihil quam amet cum asperiores, ab
            architecto ad vero doloribus dolores alias harum eaque soluta hic.
          </Text>

          <Text fontSize="xs" mt="1" fontWeight="medium">
            -BurgerMan
          </Text>
        </Flex>
      ))}
    </>
  );
};

export default MyComplaints;
