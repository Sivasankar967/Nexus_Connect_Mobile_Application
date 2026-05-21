import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  className = '',
}) {
  const variants = {
    primary: 'bg-teal',
    outline: 'bg-transparent border border-teal',
    danger: 'bg-transparent border border-red-500',
  };

  const textVariants = {
    primary: 'text-white',
    outline: 'text-teal',
    danger: 'text-red-500',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      className={`rounded-xl py-3.5 px-6 items-center justify-center ${variants[variant]} ${disabled ? 'opacity-50' : ''} ${className}`}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#FFFFFF' : '#0EA5E9'} />
      ) : (
        <Text className={`font-semibold text-base ${textVariants[variant]}`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
