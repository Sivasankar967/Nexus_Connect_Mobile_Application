import { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { Network } from 'lucide-react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import { useAuthStore } from '../store/authStore';
import { useResponsive } from '../hooks/useResponsive';

const SPLASH_DELAY_MS = 2000;

export default function SplashScreen({ navigation }) {
  const hydrate = useAuthStore((s) => s.hydrate);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const isLoading = useAuthStore((s) => s.isLoading);
  const { titleSize } = useResponsive();

  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.85)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 800,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 7,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [logoOpacity, logoScale, textOpacity]);

  useEffect(() => {
    if (isLoading) return undefined;

    const timer = setTimeout(() => {
      if (isAuthenticated) {
        navigation.replace('Main');
      } else {
        navigation.replace('Login');
      }
    }, SPLASH_DELAY_MS);

    return () => clearTimeout(timer);
  }, [isLoading, isAuthenticated, navigation]);

  return (
    <ScreenWrapper edges={['top', 'bottom', 'left', 'right']}>
      <View className="flex-1 items-center justify-center">
        <Animated.View
          style={{
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          }}
          className="items-center"
        >
          <View className="bg-teal/20 p-7 rounded-3xl mb-6 border border-teal/20">
            <Network size={72} color="#0EA5E9" strokeWidth={1.5} />
          </View>
        </Animated.View>

        <Animated.View style={{ opacity: textOpacity }} className="items-center">
          <Text
            className="text-navy-50 font-bold tracking-tight"
            style={{ fontSize: titleSize + 10 }}
          >
            NexusConnect
          </Text>
          <Text className="text-navy-200 text-sm mt-2">Your corporate intranet</Text>
          <View className="flex-row mt-8 gap-1.5">
            {[0, 1, 2].map((i) => (
              <View key={i} className="w-2 h-2 rounded-full bg-teal/60" />
            ))}
          </View>
        </Animated.View>
      </View>
    </ScreenWrapper>
  );
}
