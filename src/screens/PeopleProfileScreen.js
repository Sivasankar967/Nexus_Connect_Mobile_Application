import { ScrollView, Text, View } from 'react-native';
import { Building2, MapPin, Calendar, Heart } from 'lucide-react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import { EmployeeProfileHeader, ProfileInfoRow } from '../components/EmployeeListItem';
import BadgeGrid from '../components/BadgeGrid';
import XPBadge from '../components/XPBadge';
import Card, { EmptyState } from '../components/Card';
import FadeInView from '../components/FadeInView';
import { useResponsive } from '../hooks/useResponsive';
import { getEmployeeById, formatDate, getRecognitionsForEmployee } from '../data/seed';

export default function PeopleProfileScreen({ route }) {
  const { employeeId } = route.params;
  const employee = getEmployeeById(employeeId);
  const { padding } = useResponsive();

  if (!employee) {
    return (
      <ScreenWrapper className="items-center justify-center">
        <EmptyState
          title="Employee not found"
          subtitle="This profile may have been removed or is unavailable."
          minHeight={240}
        />
      </ScreenWrapper>
    );
  }

  const recognitions = getRecognitionsForEmployee(employeeId);

  return (
    <ScreenWrapper>
      <ScrollView
        style={{ flex: 1, paddingHorizontal: padding }}
        showsVerticalScrollIndicator={false}
      >
        <FadeInView>
          <EmployeeProfileHeader employee={employee} />

          <View className="items-center mb-4">
            <XPBadge xp={employee.xp} size="lg" />
          </View>

          <Card className="mb-4">
            <ProfileInfoRow icon={Building2} label="Department" value={employee.department} />
            <ProfileInfoRow icon={MapPin} label="Location" value={employee.location} />
            <ProfileInfoRow icon={Calendar} label="Joined" value={formatDate(employee.joinedAt)} />
          </Card>

          <Text className="text-navy-50 text-lg font-bold mb-2">About</Text>
          <Card className="mb-4">
            <Text className="text-navy-200 text-sm leading-6">{employee.bio}</Text>
          </Card>

          <Text className="text-navy-50 text-lg font-bold mb-2">Badges</Text>
          {employee.badges.length > 0 ? (
            <BadgeGrid badgeIds={employee.badges} />
          ) : (
            <EmptyState
              title="No badges yet"
              subtitle="This colleague hasn't earned badges yet."
              minHeight={120}
            />
          )}
        </FadeInView>

        <FadeInView delay={100}>
          <Text className="text-navy-50 text-lg font-bold mt-6 mb-2">
            Recognitions Received ({recognitions.length})
          </Text>
          {recognitions.length > 0 ? (
            recognitions.slice(0, 3).map((rec) => (
              <Card key={rec.id} className="mb-2">
                <Text className="text-navy-100 text-sm leading-5">{rec.message}</Text>
              </Card>
            ))
          ) : (
            <EmptyState
              icon={Heart}
              title="No recognitions yet"
              subtitle="Be the first to appreciate this colleague."
              minHeight={140}
            />
          )}
        </FadeInView>

        <View style={{ height: 32 }} />
      </ScrollView>
    </ScreenWrapper>
  );
}
