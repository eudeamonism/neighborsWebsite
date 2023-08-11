import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Flex, Spinner, Text } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import { getOneComplaintInDB } from '../../redux/actions/complaintActions';

const ComplaintRowMini = ({ description, time, title, id, loading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function convertMilitaryToStandardTime(militaryTime) {
    var hour = parseInt(militaryTime.substring(0, 2));
    var minute = militaryTime.substring(3, 5);
    var period = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return hour + ':' + minute + ' ' + period;
  }

  const singularComplHandler = () => {
    dispatch(getOneComplaintInDB(id));
    navigate('/singleComplaint');
  };

  const mapperData = (
    <>
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
                {convertMilitaryToStandardTime(time)}{' '}
                <ViewIcon
                  _hover={{ color: 'red.300', boxSize: '25px' }}
                  boxSize="20px"
                  ml="5px"
                  onClick={singularComplHandler}
                />
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );

  return <>{loading === false ? mapperData : <Spinner color="red.500" />}</>;
};

export default ComplaintRowMini;
