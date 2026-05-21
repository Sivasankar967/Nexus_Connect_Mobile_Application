import { View, Text } from 'react-native';
import { useResponsive } from '../hooks/useResponsive';

export default function ScreenHeader({ title, subtitle, right }) {
  const { titleSize, subtitleSize } = useResponsive();

  return (
    <View className="flex-row items-start justify-between mb-4">
      <View className="flex-1 pr-3" style={{ maxWidth: '85%' }}>
        <Text
          className="text-navy-50 font-bold"
          style={{ fontSize: titleSize }}
          numberOfLines={2}
        >
          {title}
        </Text>
        {subtitle ? (
          <Text
            className="text-navy-200 mt-0.5"
            style={{ fontSize: subtitleSize }}
            numberOfLines={2}
          >
            {subtitle}
          </Text>
        ) : null}
      </View>
      {right ? <View className="shrink-0">{right}</View> : null}
    </View>
  );
}
