import { Box, Flex, chakra } from '@chakra-ui/react';
import React from 'react';

// import config from 'configs/app';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const MainColumn = ({ children, className }: Props) => {
  return (
    <Box h="100vh" padding="12px">
      <Flex
        className={ className }
        borderRadius="16px"
        background="#FFF"
        flexDir="column"
        flexGrow={ 1 }
        w={{ base: '100%', lg: 'auto' }}
        // paddingX={{ base: 3, lg: config.UI.navigation.layout === 'horizontal' ? 6 : 12 }}
        paddingX={{ base: 3, lg: 6 }}
        paddingTop={{ base: `${ 12 + 52 }px`, lg: 6 }} // 12px is top padding of content area, 52px is search bar height
        paddingBottom={ 8 }
      >
        { children }
      </Flex>
    </Box>
  );
};

export default React.memo(chakra(MainColumn));
