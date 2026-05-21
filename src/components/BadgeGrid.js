import { View, Text, ScrollView } from 'react-native';
import { Award } from 'lucide-react-native';
import {
  Lightbulb,
  Users,
  GraduationCap,
  Wrench,
  Star,
  Heart,
} from 'lucide-react-native';
import { getBadgeById } from '../data/seed';
import { EmptyState } from './Card';

const iconMap = {
  Lightbulb,
  Users,
  GraduationCap,
  Wrench,
  Star,
  Heart,
};

export default function BadgeGrid({ badgeIds }) {
  if (!badgeIds || badgeIds.length === 0) {
    return (
      <EmptyState
        icon={Award}
        title="No badges yet"
        subtitle="Badges appear when you earn recognition."
        minHeight={100}
      />
    );
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
      {badgeIds.map((id) => {
        const badge = getBadgeById(id);
        if (!badge) return null;
        const Icon = iconMap[badge.icon] || Star;
        return (
          <View
            key={id}
            style={{ backgroundColor: `${badge.color}18`, borderColor: badge.color }}
            className="flex-row items-center px-3 py-2 rounded-xl border mr-2"
          >
            <Icon size={16} color={badge.color} />
            <Text style={{ color: badge.color }} className="text-xs font-semibold ml-2">
              {badge.label}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
