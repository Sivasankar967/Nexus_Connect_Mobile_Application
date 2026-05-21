import { View } from 'react-native';
import { Home, Users, Heart, User } from 'lucide-react-native';

const TAB_ICONS = {
  Home: Home,
  People: Users,
  Recognition: Heart,
  More: User,
};

export default function TabBarIcon({ routeName, focused, color, size }) {
  const Icon = TAB_ICONS[routeName] || Home;
  const iconSize = focused ? size + 2 : size;

  return (
    <View className="items-center justify-center" style={{ width: 52, height: 32 }}>
      {focused ? (
        <View className="absolute bg-teal/15 rounded-2xl w-12 h-8" />
      ) : null}
      <Icon
        size={iconSize}
        color={color}
        strokeWidth={focused ? 2.5 : 1.75}
        fill={focused && routeName === 'Recognition' ? color : 'transparent'}
      />
    </View>
  );
}
