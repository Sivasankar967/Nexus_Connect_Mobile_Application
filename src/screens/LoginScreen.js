import { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Network, Info } from 'lucide-react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuthStore } from '../store/authStore';
import { useResponsive } from '../hooks/useResponsive';
import { DEMO_CREDENTIALS } from '../data/seed';

export default function LoginScreen({ navigation }) {
  const login = useAuthStore((s) => s.login);
  const { padding, titleSize } = useResponsive();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError('');
    if (!email.trim() || !password) {
      setError('Please enter email and password');
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      navigation.replace('Main');
    } catch (e) {
      setError(e.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const fillDemo = () => {
    setEmail(DEMO_CREDENTIALS.email);
    setPassword(DEMO_CREDENTIALS.password);
    setError('');
  };

  return (
    <ScreenWrapper edges={['top', 'bottom', 'left', 'right']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            paddingHorizontal: padding,
            paddingVertical: 32,
          }}
          keyboardShouldPersistTaps="always"
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
        >
          <View className="items-center mb-10">
            <View className="bg-teal/20 p-5 rounded-2xl mb-4">
              <Network size={48} color="#0EA5E9" strokeWidth={1.5} />
            </View>
            <Text className="text-navy-50 font-bold" style={{ fontSize: titleSize }}>
              Welcome back
            </Text>
            <Text className="text-navy-200 text-sm mt-1">Sign in to NexusConnect</Text>
          </View>

          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="employee@nexus.com"
            error={error && !email ? 'Required' : undefined}
            autoCapitalize="none"
            keyboardType="email-address"
            autoComplete="email"
            textContentType="emailAddress"
          />
          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            secureTextEntry
            autoComplete="password"
            textContentType="password"
            error={error && email ? error : undefined}
          />

          <Button title="Sign In" onPress={handleLogin} loading={loading} className="mt-2" />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={fillDemo}
            className="flex-row items-start bg-navy-800 rounded-xl p-4 mt-6 border border-teal/30"
          >
            <Info size={18} color="#0EA5E9" style={{ marginTop: 2 }} />
            <View className="ml-3 flex-1">
              <Text className="text-teal text-xs font-semibold mb-1">
                Demo credentials — tap to fill
              </Text>
              <Text className="text-navy-200 text-xs">{DEMO_CREDENTIALS.email}</Text>
              <Text className="text-navy-200 text-xs">Password: {DEMO_CREDENTIALS.password}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}
