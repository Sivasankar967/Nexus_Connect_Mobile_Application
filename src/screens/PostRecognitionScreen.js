import { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import ColleaguePicker from '../components/ColleaguePicker';
import { BadgePicker } from '../components/RecognitionPostCard';
import Input from '../components/Input';
import Button from '../components/Button';
import FadeInView from '../components/FadeInView';
import { useToast } from '../components/ToastProvider';
import { useAuthStore } from '../store/authStore';
import { useResponsive } from '../hooks/useResponsive';
import { badges } from '../data/seed';

const MAX_MESSAGE_LENGTH = 280;

export default function PostRecognitionScreen({ navigation }) {
  const user = useAuthStore((s) => s.user);
  const addRecognitionPost = useAuthStore((s) => s.addRecognitionPost);
  const { showToast } = useToast();
  const { padding, titleSize } = useResponsive();

  const [colleague, setColleague] = useState(null);
  const [badgeId, setBadgeId] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!colleague) newErrors.colleague = 'Please select a colleague';
    if (!badgeId) newErrors.badge = 'Please select a badge';
    if (!message.trim()) newErrors.message = 'Please write a message';
    if (message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      addRecognitionPost({
        toEmployeeId: colleague.id,
        badgeId,
        message: message.trim(),
      });
      showToast('🎉 Recognition sent! +10 XP');
      navigation.goBack();
    } catch (e) {
      Alert.alert('Error', e.message || 'Failed to post recognition');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper>
      <ScrollView
        style={{ flex: 1, paddingHorizontal: padding, paddingTop: 8 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <FadeInView>
          <Text className="text-navy-50 font-bold mb-1" style={{ fontSize: titleSize }}>
            Post Recognition
          </Text>
          <Text className="text-navy-200 text-sm mb-6">Show appreciation for a colleague</Text>

          <ColleaguePicker
            selected={colleague}
            onSelect={setColleague}
            excludeId={user?.id}
          />
          {errors.colleague ? (
            <Text className="text-red-500 text-sm -mt-2 mb-2">{errors.colleague}</Text>
          ) : null}

          <BadgePicker badges={badges} selectedId={badgeId} onSelect={setBadgeId} />
          {errors.badge ? (
            <Text className="text-red-500 text-sm -mt-2 mb-2">{errors.badge}</Text>
          ) : null}

          <Input
            label="Message"
            value={message}
            onChangeText={setMessage}
            placeholder="Write why you're recognizing this colleague..."
            multiline
            numberOfLines={5}
            maxLength={MAX_MESSAGE_LENGTH}
            error={errors.message}
          />
          <Text className="text-navy-600 text-xs text-right -mt-2 mb-4">
            {message.length}/{MAX_MESSAGE_LENGTH}
          </Text>

          <FadeInView delay={80} className="bg-navy-800 rounded-xl p-4 mb-6 border border-amber/30">
            <Text className="text-amber text-xs font-semibold mb-1">XP Rewards</Text>
            <Text className="text-navy-200 text-sm">+50 XP for recipient · +10 XP for you</Text>
          </FadeInView>

          <Button title="Send Recognition" onPress={handleSubmit} loading={loading} />
        </FadeInView>
        <View style={{ height: 32 }} />
      </ScrollView>
    </ScreenWrapper>
  );
}
