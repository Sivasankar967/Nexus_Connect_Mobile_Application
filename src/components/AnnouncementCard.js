import { View, Text, TouchableOpacity } from 'react-native';
import Card, { Chip, PinnedBadge } from './Card';
import { formatDate } from '../data/seed';

export default function AnnouncementCard({ announcement, onPress }) {
  const content = (
    <>
      {announcement.isPinned ? <PinnedBadge /> : null}
      <Chip label={announcement.category} />
      <Text className="text-navy-50 font-bold text-base mt-2">{announcement.title}</Text>
      <Text className="text-navy-200 text-sm mt-1 leading-5">{announcement.summary}</Text>
      <Text className="text-navy-600 text-xs mt-2">{formatDate(announcement.publishedAt)}</Text>
    </>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <Card className="mb-3">{content}</Card>
      </TouchableOpacity>
    );
  }

  return <Card className="mb-3">{content}</Card>;
}

export function AnnouncementsList({ announcements, onPressAnnouncement }) {
  const sorted = [...announcements].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });

  return (
    <View>
      {sorted.map((ann) => (
        <AnnouncementCard
          key={ann.id}
          announcement={ann}
          onPress={
            onPressAnnouncement ? () => onPressAnnouncement(ann) : undefined
          }
        />
      ))}
    </View>
  );
}
