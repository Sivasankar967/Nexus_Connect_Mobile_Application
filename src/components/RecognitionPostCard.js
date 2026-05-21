import { View, Text, TouchableOpacity } from 'react-native';
import { Heart, ArrowRight } from 'lucide-react-native';
import Card from './Card';
import Avatar from './Avatar';
import { getEmployeeById, getBadgeById, formatRelativeTime } from '../data/seed';
import {
  Lightbulb,
  Users,
  GraduationCap,
  Wrench,
  Star,
  Heart as HeartIcon,
} from 'lucide-react-native';

const iconMap = {
  Lightbulb,
  Users,
  GraduationCap,
  Wrench,
  Star,
  Heart: HeartIcon,
};

export default function RecognitionPostCard({ post }) {
  const from = getEmployeeById(post.fromEmployeeId);
  const to = getEmployeeById(post.toEmployeeId);
  const badge = getBadgeById(post.badgeId);
  const BadgeIcon = badge ? iconMap[badge.icon] || Star : Star;

  return (
    <Card className="mb-3">
      <View className="flex-row items-center mb-3">
        <Avatar uri={from?.avatar} name={from?.name} size="sm" />
        <Text className="text-navy-200 text-sm mx-2">{from?.name?.split(' ')[0]}</Text>
        <ArrowRight size={14} color="#475569" />
        <View className="ml-2">
          <Avatar uri={to?.avatar} name={to?.name} size="sm" />
        </View>
        <Text className="text-navy-50 text-sm font-semibold ml-2">{to?.name}</Text>
      </View>

      {badge ? (
        <View
          style={{ backgroundColor: `${badge.color}22`, borderColor: badge.color }}
          className="flex-row items-center self-start px-2.5 py-1 rounded-full border mb-2"
        >
          <BadgeIcon size={12} color={badge.color} />
          <Text style={{ color: badge.color }} className="text-xs font-bold ml-1.5">
            {badge.label}
          </Text>
        </View>
      ) : null}

      <Text className="text-navy-100 text-sm leading-6">{post.message}</Text>

      <View className="flex-row items-center justify-between mt-3">
        <Text className="text-navy-600 text-xs">{formatRelativeTime(post.createdAt)}</Text>
        <View className="flex-row items-center">
          <Heart size={14} color="#F59E0B" fill="#F59E0B" />
          <Text className="text-amber text-xs ml-1 font-medium">{post.likes}</Text>
        </View>
      </View>
    </Card>
  );
}

export function BadgePicker({ badges, selectedId, onSelect }) {
  return (
    <View className="mb-4">
      <Text className="text-navy-200 text-sm mb-2 font-medium">Select Badge</Text>
      <View className="flex-row flex-wrap">
        {badges.map((badge) => {
          const Icon = iconMap[badge.icon] || Star;
          const selected = selectedId === badge.id;
          return (
            <TouchableOpacity
              key={badge.id}
              onPress={() => onSelect(badge.id)}
              style={{
                backgroundColor: selected ? `${badge.color}33` : '#1E293B',
                borderColor: selected ? badge.color : '#475569',
              }}
              className="flex-row items-center px-3 py-2.5 rounded-xl border mr-2 mb-2"
            >
              <Icon size={16} color={badge.color} />
              <Text
                style={{ color: selected ? badge.color : '#CBD5E1' }}
                className="text-xs font-semibold ml-2"
              >
                {badge.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
