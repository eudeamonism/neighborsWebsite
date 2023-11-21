import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../../NavBar';
import MobileForm from '../../Forms/MobileForm';
import { Text, VStack, Flex, Divider } from '@chakra-ui/react';
import UserCard from './UserCard';

import { filterMode } from '../../../redux/actions/filterActions';
const SmallDash = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(false);
  const complaint = useSelector(state => state.complaint);
  const { open } = complaint;

  const filterHandler = () => {
    dispatch(filterMode());
    setFilter(!filter);
  };

  return (
    <>
      <NavBar filterHandler={filterHandler} />
      <>
        {filter === false ? (
          <>
            {open === false && filter === false ? (
              <UserCard />
            ) : (
              <VStack>
                <MobileForm />
              </VStack>
            )}
          </>
        ) : (
          <Flex direction="column" gap="2" mt="2" p="2">
            <Text fontSize="16px" fontWeight="semibold">
              Neighbors Community Guidelines
            </Text>

            <Text fontSize="13">
              At Neighbors, we foster a safe and welcoming platform where
              community members can share important information, connect with
              neighbors, and build stronger relationships. We believe in
              preserving our community's values and ensuring a positive
              experience for all users. To achieve this, we ask our users to
              adhere to the following guidelines:
            </Text>

            <Text fontSize="14px" fontWeight="semibold">
              Respectful Communication
            </Text>

            <Text fontSize="13">
              We expect all users to maintain a respectful and considerate tone
              in all interactions. This includes refraining from personal
              attacks, harassment, or discriminatory language. Additionally,
              users should avoid posting false or misleading information and
              respect the privacy of others by not sharing personal information
              without their consent.
            </Text>
            <Text fontSize="14px" fontWeight="semibold">
              Community-Oriented Content
            </Text>

            <Text fontSize="13">
              The content shared on Neighbors should be relevant to the
              community. This includes safety alerts, neighborhood events, or
              local issues. Users should avoid posting content that is purely
              commercial or self-promotional, as well as repetitive or
              irrelevant content that disrupts the community's focus.
            </Text>
            <Text fontSize="14px" fontWeight="semibold">
              Responsible Reporting
            </Text>

            <Text fontSize="13">
              When reporting concerns or incidents, users should provide clear
              and factual details without personal opinions or biases.
              Accusations should not be made without evidence, and users should
              refrain from posting content that could harm individuals or incite
              violence.
            </Text>

            <Text fontSize="14px" fontWeight="semibold">
              User Responsibility
            </Text>

            <Text fontSize="13" fontWeight="medium">
              Users are responsible for the content they post and the actions
              they take on the platform. Neighbors is not responsible for any
              content posted by users. Violations of these guidelines may result
              in the removal of content, suspension or termination of user
              accounts.
            </Text>

            <Flex justify="center" mb="4" mt="2">
              <Text
                onClick={filterHandler}
                bg="green.50"
                _dark={{ backgroundColor: 'green.600' }}
                borderRadius="4"
                p="1"
              >
                I Agree
              </Text>
            </Flex>
          </Flex>
        )}
      </>
    </>
  );
};

export default SmallDash;
