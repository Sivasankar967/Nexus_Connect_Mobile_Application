import { View, TextInput, StyleSheet } from 'react-native';
import { Search } from 'lucide-react-native';

export default function SearchBar({ value, onChangeText, placeholder = 'Search...' }) {
  return (
    <View style={styles.wrapper} collapsable={false}>
      <Search size={20} color="#CBD5E1" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#475569"
        editable
        showSoftInputOnFocus
        underlineColorAndroid="transparent"
        autoCorrect={false}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(71, 85, 105, 0.3)',
  },
  input: {
    flex: 1,
    marginLeft: 12,
    color: '#F8FAFC',
    fontSize: 16,
    padding: 0,
    minHeight: 24,
  },
});
