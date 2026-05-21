import { View, Text } from 'react-native';
import { Quote } from 'lucide-react-native';
import Card from './Card';
import Avatar from './Avatar';
import { formatDate } from '../data/seed';

export default function LeadershipMessageCard({ message }) {
  return (
    <Card className="mb-4">
      <View className="flex-row items-center mb-3">
        <Avatar uri={message.avatar} name={message.author} size="md" />
        <View className="ml-3 flex-1">
          <Text className="text-navy-50 font-bold text-base">{message.author}</Text>
          <Text className="text-navy-200 text-sm">{message.title}</Text>
        </View>
        <Quote size={20} color="#0EA5E9" />
      </View>
      <Text className="text-navy-100 text-sm leading-6 italic">"{message.message}"</Text>
      <Text className="text-navy-600 text-xs mt-3">{formatDate(message.publishedAt)}</Text>
    </Card>
  );
}
