import { ScrollView, Text, View, Alert, Linking } from 'react-native';
import {
  Gift,
  Headphones,
  FileText,
  MessageSquare,
} from 'lucide-react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Avatar from '../components/Avatar';
import BadgeGrid from '../components/BadgeGrid';
import QuickLinkItem, { ProfileStatsRow } from '../components/QuickLinkItem';
import Button from '../components/Button';
import { SectionHeader, EmptyState } from '../components/Card';
import ScreenHeader from '../components/ScreenHeader';
import FadeInView from '../components/FadeInView';
import { useAuthStore } from '../store/authStore';
import { useResponsive } from '../hooks/useResponsive';
import { getRecognitionsForEmployee } from '../data/seed';

const QUICK_LINKS = [
  { icon: Gift, label: 'Benefits Portal', url: 'https://nexus.com/benefits' },
  { icon: Headphones, label: 'IT Support', url: 'https://nexus.com/it-help' },
  { icon: FileText, label: 'Company Policies', url: 'https://nexus.com/policies' },
  { icon: MessageSquare, label: 'Send Feedback', url: 'mailto:feedback@nexus.com' },
];

export default function ProfileScreen({ navigation }) {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const { padding } = useResponsive();

  if (!user) return null;

  const recognitions = getRecognitionsForEmployee(user.id);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          await logout();
          const root = navigation.getParent()?.getParent();
          if (root) {
            root.reset({ index: 0, routes: [{ name: 'Login' }] });
          } else {
            navigation.getParent()?.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }
        },
      },
    ]);
  };

  const handleQuickLink = (url) => {
    Linking.openURL(url).catch(() => {
      Alert.alert('Link', `Would open: ${url}`);
    });
  };

  return (
    <ScreenWrapper>
      <ScrollView
        style={{ flex: 1, paddingHorizontal: padding, paddingTop: 8 }}
        showsVerticalScrollIndicator={false}
      >
        <FadeInView>
          <ScreenHeader title="Profile" subtitle="Your NexusConnect account" />

          <View className="items-center mb-6">
            <Avatar uri={user.avatar} name={user.name} size="xl" />
            <Text className="text-navy-50 text-xl font-bold mt-3 text-center" numberOfLines={2}>
              {user.name}
            </Text>
            <Text className="text-teal text-sm font-medium mt-1 text-center" numberOfLines={2}>
              {user.role}
            </Text>
            <Text className="text-navy-200 text-xs mt-1 text-center" numberOfLines={1}>
              {user.department} · {user.location}
            </Text>
          </View>

          <ProfileStatsRow
            xp={user.xp}
            badgeCount={user.badges.length}
            recognitionCount={recognitions.length}
          />
        </FadeInView>

        <FadeInView delay={80}>
          <SectionHeader title="My Badges" />
          <BadgeGrid badgeIds={user.badges} />
        </FadeInView>

        <FadeInView delay={120}>
          <View className="mt-6">
            <SectionHeader title="Quick Links" />
          </View>
          {QUICK_LINKS.length > 0 ? (
            QUICK_LINKS.map((link) => (
              <QuickLinkItem
                key={link.label}
                icon={link.icon}
                label={link.label}
                onPress={() => handleQuickLink(link.url)}
              />
            ))
          ) : (
            <EmptyState
              icon={FileText}
              title="No quick links"
              subtitle="Shortcuts will appear here when available."
              minHeight={120}
            />
          )}

          <Button
            title="Sign Out"
            variant="danger"
            onPress={handleLogout}
            className="mt-6 mb-8"
          />
        </FadeInView>
      </ScrollView>
    </ScreenWrapper>
  );
}
