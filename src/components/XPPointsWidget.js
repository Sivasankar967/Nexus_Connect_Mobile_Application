import { View, Text } from 'react-native';
import { Zap, TrendingUp } from 'lucide-react-native';
import Card from './Card';
import { getXpProgress } from '../data/seed';

export default function XPPointsWidget({ xp }) {
  const { level, progress } = getXpProgress(xp);
  const nextLevelXp = level * 500;

  return (
    <Card className="mb-4">
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center">
          <View className="bg-teal/20 p-2 rounded-xl">
            <Zap size={22} color="#0EA5E9" fill="#0EA5E9" />
          </View>
          <View className="ml-3">
            <Text className="text-navy-200 text-xs font-medium uppercase tracking-wide">Your XP</Text>
            <Text className="text-navy-50 text-2xl font-bold">{xp.toLocaleString()}</Text>
          </View>
        </View>
        <View className="items-end">
          <Text className="text-amber text-xs font-semibold">LEVEL {level}</Text>
          <View className="flex-row items-center mt-1">
            <TrendingUp size={12} color="#F59E0B" />
            <Text className="text-amber text-xs ml-1 font-medium">3 day streak</Text>
          </View>
        </View>
      </View>
      <View className="h-2 bg-navy rounded-full overflow-hidden">
        <View className="h-full bg-teal rounded-full" style={{ width: `${progress}%` }} />
      </View>
      <Text className="text-navy-600 text-xs mt-2">
        {nextLevelXp - xp} XP to Level {level + 1}
      </Text>
    </Card>
  );
}
