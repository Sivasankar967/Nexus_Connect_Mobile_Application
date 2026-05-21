import { View, Text, Image } from 'react-native';

const sizes = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-20 h-20',
  xl: 'w-24 h-24',
};

export default function Avatar({ uri, name, size = 'md' }) {
  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : '?';

  if (uri) {
    return (
      <Image
        source={{ uri }}
        className={`${sizes[size]} rounded-full bg-navy-800`}
      />
    );
  }

  return (
    <View className={`${sizes[size]} rounded-full bg-teal items-center justify-center`}>
      <Text className="text-white font-bold text-sm">{initials}</Text>
    </View>
  );
}
