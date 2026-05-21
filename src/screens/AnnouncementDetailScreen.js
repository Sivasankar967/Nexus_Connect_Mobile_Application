import { ScrollView, Text, View } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Avatar from '../components/Avatar';
import { Chip } from '../components/Card';
import FadeInView from '../components/FadeInView';
import { EmptyState } from '../components/Card';
import { useResponsive } from '../hooks/useResponsive';
import { getAnnouncementById, formatDate } from '../data/seed';
import { FileText } from 'lucide-react-native';

export default function AnnouncementDetailScreen({ route }) {
  const { announcementId } = route.params;
  const announcement = getAnnouncementById(announcementId);
  const { padding } = useResponsive();

  if (!announcement) {
    return (
      <ScreenWrapper>
        <EmptyState
          icon={FileText}
          title="Announcement not found"
          subtitle="This post may have been removed."
          minHeight={280}
        />
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      <ScrollView
        style={{ flex: 1, paddingHorizontal: padding, paddingTop: 8 }}
        showsVerticalScrollIndicator={false}
      >
        <FadeInView>
          <Chip label={announcement.category} />
          {announcement.isPinned ? (
            <Text className="text-amber text-xs font-semibold mt-2">📌 Pinned announcement</Text>
          ) : null}

          <Text className="text-navy-50 text-2xl font-bold mt-4 leading-8">
            {announcement.title}
          </Text>
          <Text className="text-navy-600 text-sm mt-2">
            {formatDate(announcement.publishedAt)}
          </Text>

          <View className="flex-row items-center mt-6 mb-6 py-4 border-t border-b border-navy-600/30">
            <Avatar
              uri={announcement.authorAvatar}
              name={announcement.authorName}
              size="md"
            />
            <View className="ml-3 flex-1">
              <Text className="text-navy-50 font-semibold text-base">
                {announcement.authorName}
              </Text>
              <Text className="text-navy-200 text-sm">Posted this announcement</Text>
            </View>
          </View>

          <Text className="text-navy-100 text-base leading-7">
            {announcement.body}
          </Text>
        </FadeInView>
        <View style={{ height: 32 }} />
      </ScrollView>
    </ScreenWrapper>
  );
}
