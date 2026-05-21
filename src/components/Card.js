import { View, Text } from 'react-native';
import { Pin } from 'lucide-react-native';

export default function Card({ children, className = '' }) {
  return (
    <View className={`bg-navy-800 rounded-2xl p-4 border border-navy-600/30 ${className}`}>
      {children}
    </View>
  );
}

export function SectionHeader({ title, action, onActionPress }) {
  return (
    <View className="flex-row items-center justify-between mb-3 px-1">
      <Text className="text-navy-50 text-lg font-bold">{title}</Text>
      {action ? (
        <Text onPress={onActionPress} className="text-teal text-sm font-medium">
          {action}
        </Text>
      ) : null}
    </View>
  );
}

export function Chip({ label, color = '#0EA5E9' }) {
  return (
    <View
      style={{ backgroundColor: `${color}22`, borderColor: color }}
      className="px-2.5 py-1 rounded-full border self-start"
    >
      <Text style={{ color }} className="text-xs font-semibold">
        {label}
      </Text>
    </View>
  );
}

export function EmptyState({
  icon: Icon,
  title,
  subtitle,
  actionLabel,
  onAction,
  minHeight = 280,
}) {
  return (
    <View
      className="items-center justify-center px-8"
      style={{ minHeight, paddingVertical: 48 }}
    >
      <View className="bg-navy-800 w-20 h-20 rounded-full items-center justify-center border border-navy-600/40">
        {Icon ? <Icon size={36} color="#475569" strokeWidth={1.5} /> : null}
      </View>
      <Text className="text-navy-50 text-lg font-semibold mt-5 text-center">{title}</Text>
      {subtitle ? (
        <Text className="text-navy-200 text-sm mt-2 text-center leading-5 max-w-[280px]">
          {subtitle}
        </Text>
      ) : null}
      {actionLabel && onAction ? (
        <Text
          onPress={onAction}
          className="text-teal text-sm font-semibold mt-5 px-4 py-2 bg-teal/10 rounded-full"
        >
          {actionLabel}
        </Text>
      ) : null}
    </View>
  );
}

export function PinnedBadge() {
  return (
    <View className="flex-row items-center bg-amber/20 px-2 py-0.5 rounded-full self-start mb-2">
      <Pin size={10} color="#F59E0B" />
      <Text className="text-amber text-xs font-semibold ml-1">Pinned</Text>
    </View>
  );
}
