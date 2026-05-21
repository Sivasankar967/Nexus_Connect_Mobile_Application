import { useWindowDimensions, Platform } from 'react-native';

const BASE_WIDTH = 375;

export function useResponsive() {
  const { width, height } = useWindowDimensions();
  const scale = width / BASE_WIDTH;
  const isCompact = width <= 375;
  const isRegular = width >= 414;

  return {
    width,
    height,
    scale,
    isCompact,
    isRegular,
    padding: isCompact ? 16 : isRegular ? 20 : 18,
    titleSize: isCompact ? 22 : 26,
    subtitleSize: isCompact ? 13 : 14,
    bodySize: isCompact ? 14 : 15,
    fabSize: isCompact ? 48 : 52,
    iconSize: isCompact ? 22 : 24,
    listMinHeight: Math.max(height * 0.45, 280),
    tabBarHeight: Platform.OS === 'ios' ? (isCompact ? 82 : 88) : isCompact ? 64 : 68,
  };
}
