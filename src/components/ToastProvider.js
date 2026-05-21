import { createContext, useCallback, useContext, useRef, useState } from 'react';
import { Animated, Text, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const insets = useSafeAreaInsets();
  const [message, setMessage] = useState(null);
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-20)).current;
  const timerRef = useRef(null);

  const hide = useCallback(() => {
    Animated.parallel([
      Animated.timing(opacity, { toValue: 0, duration: 220, useNativeDriver: true }),
      Animated.timing(translateY, { toValue: -20, duration: 220, useNativeDriver: true }),
    ]).start(() => setMessage(null));
  }, [opacity, translateY]);

  const showToast = useCallback(
    (text, duration = 2800) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setMessage(text);
      opacity.setValue(0);
      translateY.setValue(-20);
      Animated.parallel([
        Animated.timing(opacity, { toValue: 1, duration: 280, useNativeDriver: true }),
        Animated.timing(translateY, { toValue: 0, duration: 280, useNativeDriver: true }),
      ]).start();
      timerRef.current = setTimeout(hide, duration);
    },
    [hide, opacity, translateY]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message ? (
        <Animated.View
          pointerEvents="none"
          style={{
            opacity,
            transform: [{ translateY }],
            position: 'absolute',
            top: insets.top + (Platform.OS === 'ios' ? 8 : 12),
            left: 16,
            right: 16,
            zIndex: 9999,
          }}
        >
          <View className="bg-teal rounded-2xl px-4 py-3.5 shadow-lg border border-teal-600/40">
            <Text className="text-white text-sm font-semibold text-center">{message}</Text>
          </View>
        </Animated.View>
      ) : null}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
