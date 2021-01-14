import React from 'react';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
const Navbar = colorFlag => {
  return (
    <Flex align="center" boxShadow="base" p="2" mb="2">
      <Box p="2">
        <Heading size="lg">Haseeb Ahmed khan</Heading>
      </Box>
      <Spacer />
      <Box>
        <ColorModeSwitcher colorFlag={colorFlag} />
      </Box>
    </Flex>
  );
};

export default Navbar;
