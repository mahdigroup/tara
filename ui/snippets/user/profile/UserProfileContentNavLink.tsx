import { Box } from '@chakra-ui/react';
import React from 'react';

import type { NavLink } from './types';

import IconSvg from 'ui/shared/IconSvg';
import LinkInternal from 'ui/shared/links/LinkInternal';

type Props = NavLink

const UserProfileContentNavLink = ({ href, icon, text, onClick }: Props) => {

  return (
    <LinkInternal
      href={ href }
      display="flex"
      alignItems="center"
      columnGap={ 3 }
      py="14px"
      color="initial"
      _hover={{ textDecoration: 'none', color: 'link_hovered' }}
      onClick={ onClick }
    >
      <IconSvg name={ icon } boxSize={ 5 } flexShrink={ 0 }/>
      <Box fontSize="14px" fontWeight="500" lineHeight={ 5 }>{ text }</Box>
    </LinkInternal>
  );
};

export default React.memo(UserProfileContentNavLink);