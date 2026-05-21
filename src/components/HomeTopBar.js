import { View, Text, TouchableOpacity } from 'react-native';
import { Bell } from 'lucide-react-native';
import { useNotificationStore } from '../store/notificationStore';

export default function HomeTopBar({
  title,
  subtitle,
  titleSize,
  subtitleSize,
  onPressNotifications,
}) {
  const unreadCount = useNotificationStore(
    (s) => s.items.filter((n) => !s.readIds[n.id]).length
  );

  return (
    <View className="flex-row items-start justify-between">
      <View className="flex-1 pr-3">
        <Text
          className="text-navy-50 font-bold"
          style={{ fontSize: titleSize }}
          numberOfLines={2}
        >
          {title}
        </Text>
        {subtitle ? (
          <Text
            className="text-navy-200 mt-1"
            style={{ fontSize: subtitleSize }}
            numberOfLines={2}
          >
            {subtitle}
          </Text>
        ) : null}
      </View>
      <TouchableOpacity
        onPress={onPressNotifications}
        activeOpacity={0.8}
        className="bg-navy-800 w-11 h-11 rounded-xl items-center justify-center border border-navy-600/40"
      >
        <Bell size={22} color="#0EA5E9" strokeWidth={2} />
        {unreadCount > 0 ? (
          <View className="absolute -top-1 -right-1 bg-amber min-w-[18px] h-[18px] rounded-full items-center justify-center px-1 border-2 border-navy">
            <Text className="text-navy text-[10px] font-bold">
              {unreadCount > 9 ? '9+' : unreadCount}
            </Text>
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
}
