import { View, Text } from 'react-native';
import { Calendar, MapPin, Users } from 'lucide-react-native';
import Card from './Card';
import { formatDate } from '../data/seed';

export default function UpcomingEventCard({ event }) {
  const eventDate = new Date(event.date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();

  return (
    <Card className="mb-4">
      <View className="flex-row">
        <View className="bg-amber rounded-xl w-14 h-14 items-center justify-center mr-4">
          <Text className="text-navy font-bold text-lg leading-5">{day}</Text>
          <Text className="text-navy text-xs font-bold">{month}</Text>
        </View>
        <View className="flex-1">
          <Text className="text-navy-50 font-bold text-base">{event.title}</Text>
          <View className="flex-row items-center mt-2">
            <Calendar size={14} color="#CBD5E1" />
            <Text className="text-navy-200 text-xs ml-1.5">
              {formatDate(event.date)} · {event.time}
            </Text>
          </View>
          <View className="flex-row items-center mt-1">
            <MapPin size={14} color="#CBD5E1" />
            <Text className="text-navy-200 text-xs ml-1.5">{event.location}</Text>
          </View>
          <View className="flex-row items-center mt-1">
            <Users size={14} color="#0EA5E9" />
            <Text className="text-teal text-xs ml-1.5 font-medium">{event.rsvpCount} going</Text>
          </View>
        </View>
      </View>
      <Text className="text-navy-200 text-sm mt-3 leading-5">{event.description}</Text>
    </Card>
  );
}
