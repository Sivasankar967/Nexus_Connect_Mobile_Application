import { useState, useMemo, useEffect } from 'react';
import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Users } from 'lucide-react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import SearchBar from '../components/SearchBar';
import EmployeeListItem from '../components/EmployeeListItem';
import ScreenHeader from '../components/ScreenHeader';
import FadeInView from '../components/FadeInView';
import { EmptyState } from '../components/Card';
import { PeopleListSkeleton } from '../components/Skeleton';
import { useResponsive } from '../hooks/useResponsive';
import { searchEmployees } from '../data/seed';

export default function PeopleScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const { padding, listMinHeight } = useResponsive();

  const filtered = useMemo(() => searchEmployees(query), [query]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScreenWrapper>
      <FadeInView style={{ flex: 1, paddingHorizontal: padding, paddingTop: 8 }}>
        <ScreenHeader title="People" subtitle="Find colleagues across Nexus" />

        <SearchBar
          value={query}
          onChangeText={setQuery}
          placeholder="Search by name, role, department..."
        />

        {loading ? (
          <PeopleListSkeleton count={6} />
        ) : (
          <View style={{ flex: 1, minHeight: 200 }}>
            <FlashList
              data={filtered}
              estimatedItemSize={80}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <EmployeeListItem
                  employee={item}
                  onPress={() =>
                    navigation.navigate('PeopleProfile', { employeeId: item.id })
                  }
                />
              )}
              ListEmptyComponent={
                <EmptyState
                  icon={Users}
                  title="No employees found"
                  subtitle={
                    query.trim()
                      ? `No results for "${query.trim()}". Try another name or department.`
                      : 'The directory is empty right now.'
                  }
                  minHeight={listMinHeight}
                />
              }
              contentContainerStyle={
                filtered.length === 0 ? { flexGrow: 1 } : { paddingBottom: 24 }
              }
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </FadeInView>
    </ScreenWrapper>
  );
}
