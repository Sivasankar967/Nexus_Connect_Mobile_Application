import { View, Text, TouchableOpacity, SectionList } from 'react-native';
import { Heart, Megaphone, Calendar, Bell } from 'lucide-react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import FadeInView from '../components/FadeInView';
import { EmptyState } from '../components/Card';
import { useNotificationStore } from '../store/notificationStore';
import { useResponsive } from '../hooks/useResponsive';
import { formatRelativeTime, groupNotificationsByPeriod } from '../data/seed';

const TYPE_CONFIG = {
  recognition_received: {
    icon: Heart,
    color: '#F59E0B',
    label: 'Recognition',
  },
  new_announcement: {
    icon: Megaphone,
    color: '#0EA5E9',
    label: 'Announcement',
  },
  event_reminder: {
    icon: Calendar,
    color: '#10B981',
    label: 'Event',
  },
};

function NotificationItem({ item, isRead, onPress }) {
  const config = TYPE_CONFIG[item.type] || TYPE_CONFIG.new_announcement;
  const Icon = config.icon;

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      activeOpacity={0.75}
      className={`flex-row items-start rounded-xl p-4 mb-2 border ${
        isRead ? 'bg-navy-800/60 border-navy-600/20' : 'bg-navy-800 border-teal/30'
      }`}
    >
      <View
        style={{ backgroundColor: `${config.color}22` }}
        className="w-10 h-10 rounded-xl items-center justify-center"
      >
        <Icon size={20} color={config.color} />
      </View>
      <View className="flex-1 ml-3">
        <View className="flex-row items-center">
          <Text
            className={`flex-1 text-sm font-semibold ${isRead ? 'text-navy-200' : 'text-navy-50'}`}
            numberOfLines={1}
          >
            {item.title}
          </Text>
          {!isRead ? (
            <View className="w-2 h-2 rounded-full bg-teal ml-2" />
          ) : null}
        </View>
        <Text className="text-navy-600 text-[10px] font-semibold uppercase mt-0.5">
          {config.label}
        </Text>
        <Text className="text-navy-200 text-sm mt-1 leading-5" numberOfLines={2}>
          {item.message}
        </Text>
        <Text className="text-navy-600 text-xs mt-2">{formatRelativeTime(item.createdAt)}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function NotificationsScreen({ navigation }) {
  const items = useNotificationStore((s) => s.items);
  const markAsRead = useNotificationStore((s) => s.markAsRead);
  const isRead = useNotificationStore((s) => s.isRead);
  const { padding, listMinHeight } = useResponsive();

  const { today, thisWeek } = groupNotificationsByPeriod(items);

  const sections = [];
  if (today.length > 0) sections.push({ title: 'Today', data: today });
  if (thisWeek.length > 0) sections.push({ title: 'This Week', data: thisWeek });

  const handlePress = (item) => {
    markAsRead(item.id);
    if (item.type === 'new_announcement' && item.relatedId) {
      navigation.navigate('AnnouncementDetail', { announcementId: item.relatedId });
    }
  };

  return (
    <ScreenWrapper>
      <FadeInView style={{ flex: 1, paddingHorizontal: padding, paddingTop: 8 }}>
        {sections.length === 0 ? (
          <EmptyState
            icon={Bell}
            title="No notifications"
            subtitle="You're all caught up."
            minHeight={listMinHeight}
          />
        ) : (
          <SectionList
            sections={sections}
            keyExtractor={(item) => item.id}
            stickySectionHeadersEnabled={false}
            showsVerticalScrollIndicator={false}
            renderSectionHeader={({ section: { title } }) => (
              <Text className="text-navy-50 text-base font-bold mb-3 mt-2">{title}</Text>
            )}
            renderItem={({ item }) => (
              <NotificationItem
                item={item}
                isRead={isRead(item.id)}
                onPress={handlePress}
              />
            )}
            contentContainerStyle={{ paddingBottom: 24 }}
          />
        )}
      </FadeInView>
    </ScreenWrapper>
  );
}
