import { useState } from 'react';
import { Text, VStack, Flex, Divider } from '@chakra-ui/react';
import fortunes from '../../../data/fortunes.json';

const Policy = () => {
  const [clicked, setClicked] = useState(false);
  const [quote, setQuote] = useState('No quote today!');

  const quoteHandler = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const selectedQuote = fortunes[randomIndex];
    setQuote(selectedQuote);
  };

  return (
    <Flex justify="center">
      <Flex direction="column" gap="2" mt="2" p="4" maxW="600px" border="1px">
        <Text fontSize="16px" fontWeight="semibold">
          Neighbors Community Guidelines
        </Text>

        <Text fontSize="15">
          At Neighbors, we foster a safe and welcoming platform where community
          members can share important information, connect with neighbors, and
          build stronger relationships. We believe in preserving our community's
          values and ensuring a positive experience for all users. To achieve
          this, we ask our users to adhere to the following guidelines:
        </Text>

        <Text fontSize="15px" fontWeight="semibold">
          Respectful Communication
        </Text>

        <Text fontSize="15">
          We expect all users to maintain a respectful and considerate tone in
          all interactions. This includes refraining from personal attacks,
          harassment, or discriminatory language. Additionally, users should
          avoid posting false or misleading information and respect the privacy
          of others by not sharing personal information without their consent.
        </Text>
        <Text fontSize="15px" fontWeight="semibold">
          Community-Oriented Content
        </Text>

        <Text fontSize="15">
          The content shared on Neighbors should be relevant to the community.
          This includes safety alerts, neighborhood events, or local issues.
          Users should avoid posting content that is purely commercial or
          self-promotional, as well as repetitive or irrelevant content that
          disrupts the community's focus.
        </Text>
        <Text fontSize="15px" fontWeight="semibold">
          Responsible Reporting
        </Text>

        <Text fontSize="15">
          When reporting concerns or incidents, users should provide clear and
          factual details without personal opinions or biases. Accusations
          should not be made without evidence, and users should refrain from
          posting content that could harm individuals or incite violence.
        </Text>

        <Text fontSize="15px" fontWeight="semibold">
          User Responsibility
        </Text>

        <Text fontSize="15" fontWeight="medium">
          Users are responsible for the content they post and the actions they
          take on the platform. Neighbors is not responsible for any content
          posted by users. Violations of these guidelines may result in the
          removal of content, suspension or termination of user accounts.
        </Text>

        <Flex justify="center" mb="4" mt="2">
          {clicked === false ? (
            <Text
              onClick={() => {
                setClicked(true);
                quoteHandler();

                setTimeout(() => {
                  alert('Thanks!');
                  setClicked(false);
                }, 6000);
              }}
              bg="green.200"
              _dark={{ backgroundColor: 'green.600' }}
              borderRadius="4"
              p="1"
            >
              I Agree
            </Text>
          ) : (
            <Flex
              direction="column"
              _dark={{ color: 'gray.500' }}
              fontSize="18px"
            >
              <Text>{quote.quote}</Text>
              <Text fontWeight="bold">{quote.author}</Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Policy;
