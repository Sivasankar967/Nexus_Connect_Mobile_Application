import { View, Text } from 'react-native';
import { Zap } from 'lucide-react-native';
import { getXpProgress } from '../data/seed';

export default function XPBadge({ xp, size = 'md' }) {
  const { level } = getXpProgress(xp);
  const isLarge = size === 'lg';

  return (
    <View className={`flex-row items-center bg-amber/20 rounded-full ${isLarge ? 'px-4 py-2' : 'px-2.5 py-1'}`}>
      <Zap size={isLarge ? 18 : 14} color="#F59E0B" fill="#F59E0B" />
      <Text className={`text-amber font-bold ml-1.5 ${isLarge ? 'text-base' : 'text-xs'}`}>
        {xp.toLocaleString()} XP · Lvl {level}
      </Text>
    </View>
  );
}
