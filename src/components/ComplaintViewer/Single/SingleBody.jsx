import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneComplaintInDB } from '../../../redux/actions/complaintActions';
import { Flex, Text, Image } from '@chakra-ui/react';

const SingleBody = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const complaint = useSelector(state => state.complaint);
  const complaintId = searchParams.get('id');
  const { singleComplaintData } = complaint;

  useEffect(() => {
    if (complaintId) {
      dispatch(getOneComplaintInDB(complaintId));
    }
  }, [dispatch, complaintId]);

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
          {singleComplaintData.complaintType}
        </Text>
      </Flex>
      <Flex w="390px" maxH="144px" backgroundColor="blue.600">
        <Text
          fontFamily="'Inter', sans-serif;"
          fontSize="25px"
          fontWeight="500"
          lineHeight="normal"
          ml="20px"
          mt="10px"
          mr="10px"
        >
          {singleComplaintData.title}
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
          {singleComplaintData.crossStreet1}
        </Text>
        {singleComplaintData.crossStreet2 ? (
          <>
            <Text
              fontFamily="'Inter', sans-serif;"
              fontSize="25px"
              fontWeight="200"
              lineHeight="normal"
              ml="20px"
              mt="10px"
              mr="10px"
            >
              {singleComplaintData.crossStreet2}
            </Text>
          </>
        ) : null}
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
