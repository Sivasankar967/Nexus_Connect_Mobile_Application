import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

export default function QuickLinkItem({ icon: Icon, label, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="flex-row items-center bg-navy-800 rounded-xl p-4 mb-2 border border-navy-600/30"
    >
      <View className="bg-teal/20 p-2 rounded-lg">
        <Icon size={20} color="#0EA5E9" />
      </View>
      <Text className="text-navy-50 text-base font-medium ml-3 flex-1">{label}</Text>
      <ChevronRight size={20} color="#475569" />
    </TouchableOpacity>
  );
}

export function ProfileStatsRow({ xp, badgeCount, recognitionCount }) {
  const stats = [
    { label: 'XP Points', value: xp.toLocaleString() },
    { label: 'Badges', value: badgeCount },
    { label: 'Recognitions', value: recognitionCount },
  ];

  return (
    <View className="flex-row bg-navy-800 rounded-2xl p-4 mb-4 border border-navy-600/30">
      {stats.map((stat, index) => (
        <View
          key={stat.label}
          className={`flex-1 items-center ${index < stats.length - 1 ? 'border-r border-navy-600/30' : ''}`}
        >
          <Text className="text-navy-50 text-xl font-bold">{stat.value}</Text>
          <Text className="text-navy-200 text-xs mt-1">{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}
