import { View, TextInput, Text, Platform, StyleSheet } from 'react-native';

export default function Input({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  error,
  multiline = false,
  numberOfLines = 1,
  maxLength,
  className = '',
  autoCapitalize = 'none',
  keyboardType = 'default',
  autoComplete,
  textContentType,
}) {
  const resolvedKeyboardType =
    keyboardType === 'email-address' && Platform.OS === 'android'
      ? 'default'
      : keyboardType;

  return (
    <View className={`mb-4 ${className}`} collapsable={false}>
      {label ? <Text className="text-navy-200 text-sm mb-2 font-medium">{label}</Text> : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#475569"
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        editable
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        spellCheck={false}
        keyboardType={resolvedKeyboardType}
        autoComplete={autoComplete}
        textContentType={textContentType}
        showSoftInputOnFocus
        underlineColorAndroid="transparent"
        textAlignVertical={multiline ? 'top' : 'center'}
        style={[
          styles.input,
          error && styles.inputError,
          multiline && styles.multiline,
        ]}
      />
      {error ? <Text className="text-red-500 text-sm mt-1">{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#1E293B',
    color: '#F8FAFC',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 14 : 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#475569',
    minHeight: 48,
  },
  inputError: {
    borderColor: '#EF4444',
  },
  multiline: {
    minHeight: 120,
    paddingTop: 12,
  },
});
