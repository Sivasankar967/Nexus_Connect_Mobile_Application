import { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

function SkeletonBox({ style, className = '' }) {
  const opacity = useRef(new Animated.Value(0.35)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 0.85, duration: 700, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.35, duration: 700, useNativeDriver: true }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, [opacity]);

  return (
    <Animated.View
      style={[{ opacity }, style]}
      className={`bg-navy-600/50 rounded-xl ${className}`}
    />
  );
}

export function PeopleListSkeleton({ count = 6 }) {
  return (
    <View>
      {Array.from({ length: count }).map((_, i) => (
        <View
          key={i}
          className="flex-row items-center bg-navy-800 rounded-xl p-4 mb-2 border border-navy-600/20"
        >
          <SkeletonBox style={{ width: 48, height: 48, borderRadius: 24 }} />
          <View className="flex-1 ml-3">
            <SkeletonBox style={{ width: '70%', height: 14, marginBottom: 8 }} />
            <SkeletonBox style={{ width: '50%', height: 12, marginBottom: 6 }} />
            <SkeletonBox style={{ width: '35%', height: 10 }} />
          </View>
        </View>
      ))}
    </View>
  );
}

export function RecognitionFeedSkeleton({ count = 4 }) {
  return (
    <View>
      {Array.from({ length: count }).map((_, i) => (
        <View
          key={i}
          className="bg-navy-800 rounded-2xl p-4 mb-3 border border-navy-600/20"
        >
          <View className="flex-row items-center mb-3">
            <SkeletonBox style={{ width: 32, height: 32, borderRadius: 16 }} />
            <SkeletonBox style={{ width: 60, height: 10, marginLeft: 8 }} />
            <SkeletonBox style={{ width: 32, height: 32, borderRadius: 16, marginLeft: 16 }} />
            <SkeletonBox style={{ width: 80, height: 10, marginLeft: 8 }} />
          </View>
          <SkeletonBox style={{ width: 90, height: 22, borderRadius: 12, marginBottom: 10 }} />
          <SkeletonBox style={{ width: '100%', height: 12, marginBottom: 6 }} />
          <SkeletonBox style={{ width: '85%', height: 12, marginBottom: 6 }} />
          <SkeletonBox style={{ width: '40%', height: 10, marginTop: 8 }} />
        </View>
      ))}
    </View>
  );
}
