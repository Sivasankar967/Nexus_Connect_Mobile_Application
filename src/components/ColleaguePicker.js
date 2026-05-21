import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { X, ChevronDown } from 'lucide-react-native';
import { useState } from 'react';
import Avatar from './Avatar';
import SearchBar from './SearchBar';
import { searchEmployees } from '../data/seed';

export default function ColleaguePicker({ employees, selected, onSelect, excludeId, label = 'Tag Colleague' }) {
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = searchEmployees(query, excludeId);

  const handleSelect = (employee) => {
    onSelect(employee);
    setVisible(false);
    setQuery('');
  };

  return (
    <View className="mb-4">
      <Text className="text-navy-200 text-sm mb-2 font-medium">{label}</Text>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        className="flex-row items-center bg-navy-800 rounded-xl px-4 py-3.5 border border-navy-600/30"
      >
        {selected ? (
          <>
            <Avatar uri={selected.avatar} name={selected.name} size="sm" />
            <Text className="text-navy-50 text-base ml-3 flex-1">{selected.name}</Text>
          </>
        ) : (
          <Text className="text-navy-600 text-base flex-1">Select a colleague...</Text>
        )}
        <ChevronDown size={20} color="#475569" />
      </TouchableOpacity>

      <Modal visible={visible} animationType="slide" transparent>
        <View className="flex-1 bg-black/60 justify-end">
          <View className="bg-navy rounded-t-3xl max-h-[80%] p-4">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-navy-50 text-lg font-bold">Select Colleague</Text>
              <TouchableOpacity onPress={() => setVisible(false)} className="p-2">
                <X size={24} color="#CBD5E1" />
              </TouchableOpacity>
            </View>
            <SearchBar value={query} onChangeText={setQuery} placeholder="Search by name, role..." />
            <FlatList
              data={filtered}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item)}
                  className="flex-row items-center py-3 border-b border-navy-600/30"
                >
                  <Avatar uri={item.avatar} name={item.name} size="md" />
                  <View className="ml-3 flex-1">
                    <Text className="text-navy-50 font-semibold">{item.name}</Text>
                    <Text className="text-navy-200 text-sm">{item.role}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
