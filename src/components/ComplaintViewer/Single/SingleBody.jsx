import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneComplaintInDB } from '../../../redux/actions/complaintActions';
import { Flex, Text, Image, Icon } from '@chakra-ui/react';
import {
  AiFillThunderbolt,
  AiOutlineUser,
  AiOutlineFile,
} from 'react-icons/ai';

const SingleBody = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const complaint = useSelector(state => state.complaint);
  const complaintId = searchParams.get('id');
  const { singleComplaintData } = complaint;
  const user = useSelector(state => state.user);
  const { userInfo } = user;

  useEffect(() => {
    if (complaintId) {
      dispatch(getOneComplaintInDB(complaintId));
    }
  }, [dispatch, complaintId]);

 
  return (
    <Flex
      direction="column"
      fontFamily="'Inter', sans-serif;"
      mx="20px"
      width="350px"
    >
      <Flex height="20px" align="center">
        <Icon as={AiFillThunderbolt} color="yellow" boxSize="12px" />
        <Text ml="1" fontWeight="200">
          {singleComplaintData.complaintType}
        </Text>
      </Flex>

      <Flex maxHeight="80px" mb="5px">
        <Text
          fontSize="30px"
          fontWeight="600"
          letterSpacing="tight"
          lineHeight="10"
        >
          {singleComplaintData.title}
        </Text>
      </Flex>

      <Flex direction="column" mb="4">
        <Flex align="center">
          <Icon as={AiOutlineUser} color="gray.400" boxSize="12px" />
          <Text ml="1" fontWeight="200" fontSize="12px" color="gray.400">
            {singleComplaintData.displayName}
          </Text>
        </Flex>

        <Flex align="center">
          <Icon as={AiOutlineFile} color="gray.400" boxSize="12px" />
          <Text ml="1" fontWeight="200" fontSize="12px" color="gray.400">
            {userInfo.numberOfComplaints}
          </Text>
        </Flex>
      </Flex>

      <Flex height="220px">
        <Image objectFit="scale-down" src="/assets/images/holder.jpg" />
      </Flex>

      <Flex height="100px" mt="4">
        <Text fontSize="18px" fontWeight="400">
          {singleComplaintData.description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default SingleBody;
