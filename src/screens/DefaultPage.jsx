import { motion } from 'framer-motion';
import { Box, VStack, Stack, Text } from '@chakra-ui/react';

const DefaultPage = () => {
  const textStuff =
    "Neighbors is a safe and friendly way to connect with your neighbors and keep your neighborhood safe. With Neighbors, you can make complaints about suspicious activity, broken streetlights, and other issues. You can also see if other neighbors have reported the same issue and get updates on the status of your complaint. I hope you'll join me on Neighbors and help us make our neighborhood a better place.";
  const words = textStuff.split(' ');

  return (
    <Box
      bg="orange.200"
      _dark={{ background: 'blue.200' }}
      minW="600px"
      minH="900px"
    >
      <VStack>
        <Stack>
          <motion.div
            style={{ fontSize: '12rem', fontFamily: 'Caprasimo, Cursive' }}
            transition={{
              duration: 0.5,

              ease: [0, 0.71, 0.2, 1.01],
            }}
            whileHover={{
              cursor: 'pointer',
              fontSize: '11rem',
              color: 'white',
            }}
          >
            Neighbors
          </motion.div>
        </Stack>

        <motion.div style={{ maxWidth: '950px'}}>
          {words.map((word, index) => (
            <motion.span
              key={index}
              style={{ fontSize: '1.4rem', marginLeft: '.5rem', display: 'inline-block' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </VStack>
    </Box>
  );
};

export default DefaultPage;
