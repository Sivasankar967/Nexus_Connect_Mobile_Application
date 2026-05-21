import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import Avatar from './Avatar';

export default function EmployeeListItem({ employee, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="flex-row items-center bg-navy-800 rounded-xl p-4 mb-2 border border-navy-600/30"
    >
      <Avatar uri={employee.avatar} name={employee.name} size="md" />
      <View className="flex-1 ml-3">
        <Text className="text-navy-50 font-semibold text-base">{employee.name}</Text>
        <Text className="text-navy-200 text-sm">{employee.role}</Text>
        <Text className="text-navy-600 text-xs mt-0.5">{employee.department}</Text>
      </View>
      <ChevronRight size={20} color="#475569" />
    </TouchableOpacity>
  );
}

export function EmployeeProfileHeader({ employee }) {
  return (
    <View className="items-center py-6">
      <Avatar uri={employee.avatar} name={employee.name} size="xl" />
      <Text className="text-navy-50 text-2xl font-bold mt-4">{employee.name}</Text>
      <Text className="text-teal text-base font-medium mt-1">{employee.role}</Text>
      <Text className="text-navy-200 text-sm mt-1">{employee.email}</Text>
    </View>
  );
}

export function ProfileInfoRow({ icon: Icon, label, value }) {
  return (
    <View className="flex-row items-center py-3 border-b border-navy-600/30">
      <Icon size={18} color="#0EA5E9" />
      <Text className="text-navy-200 text-sm ml-3 w-24">{label}</Text>
      <Text className="text-navy-50 text-sm flex-1 font-medium">{value}</Text>
    </View>
  );
}
