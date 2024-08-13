import getDefaultTransitionProps from 'theme/utils/getDefaultTransitionProps';

import useColors from './useColors';

type Props = {
  isExpanded?: boolean;
  isCollapsed?: boolean;
  isActive?: boolean;
}

export default function useNavLinkProps({ isExpanded, isCollapsed, isActive }: Props) {
  const colors = useColors();

  return {
    itemProps: {
      py: '9px',
      display: 'flex',
      color: isActive ? '#8A55FD' : 'rgba(0, 0, 0, 0.40)',
      bgColor: isActive ? 'rgba(195, 178, 255, 0.24)' : colors.bg.default,
      _hover: { color: isActive ? '#8A55FD' : '#A07EFF' },
      borderRadius: 'base',
      ...getDefaultTransitionProps({ transitionProperty: 'width, padding' }),
    },
    textProps: {
      variant: 'inherit',
      fontSize: 'sm',
      lineHeight: '20px',
      opacity: { base: '1', lg: isExpanded ? '1' : '0', xl: isCollapsed ? '0' : '1' },
      transitionProperty: 'opacity',
      transitionDuration: 'normal',
      transitionTimingFunction: 'ease',
    },
  };
}
