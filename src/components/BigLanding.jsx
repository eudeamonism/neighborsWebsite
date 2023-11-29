import { motion } from 'framer-motion';
import { Box, VStack, Button, Text, Center } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useNavigate } from 'react-router-dom';

const BigLanding = () => {
  const textStuff =
    "Neighbors is a safe and friendly way to connect with your neighbors and keep your neighborhood safe. With Neighbors, you can make complaints about suspicious activity, broken streetlights, and other issues. You can also see if other neighbors have reported the same issue and get updates on the status of your complaint. I hope you'll join me on Neighbors and help us make our neighborhood a better place.";
  const words = textStuff.split(' ');

  const navigate = useNavigate();

  return (
    <VStack mt={{ sm: '100', md: '150', lg: '100', xl: '150' }}>
      <Text fontFamily="Caprasimo, Cursive" fontSize="4rem">
        Neighbors <ColorModeSwitcher />
      </Text>

      <motion.div
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      ></motion.div>

      <motion.div style={{ maxWidth: '500px' }}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            style={{
              fontSize: '1.3rem',
              marginLeft: '.5rem',
              display: 'inline-block',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
      <Button
        mt="2rem"
        onClick={() => {
          navigate('/signup');
        }}
        _hover={{ fontSize: '1.3rem' }}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default BigLanding;
