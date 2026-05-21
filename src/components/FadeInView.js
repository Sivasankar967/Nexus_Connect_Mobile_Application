import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export default function FadeInView({ children, delay = 0, style, className = '' }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 420,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 420,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, [delay, opacity, translateY]);

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[{ opacity, transform: [{ translateY }] }, style]}
      className={className}
    >
      {children}
    </Animated.View>
  );
}
