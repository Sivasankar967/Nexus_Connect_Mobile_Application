import { ScrollView, RefreshControl, View } from 'react-native';
import { useState, useCallback } from 'react';
import { Megaphone } from 'lucide-react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import HomeTopBar from '../components/HomeTopBar';
import LeadershipMessageCard from '../components/LeadershipMessageCard';
import XPPointsWidget from '../components/XPPointsWidget';
import { AnnouncementsList } from '../components/AnnouncementCard';
import UpcomingEventCard from '../components/UpcomingEventCard';
import { SectionHeader, EmptyState } from '../components/Card';
import FadeInView from '../components/FadeInView';
import { useAuthStore } from '../store/authStore';
import { useResponsive } from '../hooks/useResponsive';
import {
  leadershipMessage,
  announcements,
  upcomingEvent,
  getGreeting,
} from '../data/seed';

export default function HomeScreen({ navigation }) {
  const user = useAuthStore((s) => s.user);
  const refreshUser = useAuthStore((s) => s.refreshUser);
  const [refreshing, setRefreshing] = useState(false);
  const { padding, titleSize, subtitleSize } = useResponsive();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refreshUser();
    setTimeout(() => setRefreshing(false), 800);
  }, [refreshUser]);

  const firstName = user?.name?.split(' ')[0] || 'there';

  return (
    <ScreenWrapper>
      <ScrollView
        style={{ flex: 1, paddingHorizontal: padding }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#0EA5E9" />
        }
      >
        <FadeInView>
          <HomeTopBar
            title={`${getGreeting()}, ${firstName}`}
            subtitle="Here's what's happening at Nexus"
            titleSize={titleSize}
            subtitleSize={subtitleSize}
            onPressNotifications={() => navigation.navigate('Notifications')}
          />
        </FadeInView>

        <FadeInView delay={60}>
          <LeadershipMessageCard message={leadershipMessage} />
        </FadeInView>

        <FadeInView delay={100}>
          <XPPointsWidget xp={user?.xp || 0} />
        </FadeInView>

        <FadeInView delay={140}>
          <SectionHeader title="Announcements" />
          {announcements.length > 0 ? (
            <AnnouncementsList
              announcements={announcements}
              onPressAnnouncement={(ann) =>
                navigation.navigate('AnnouncementDetail', { announcementId: ann.id })
              }
            />
          ) : (
            <EmptyState
              icon={Megaphone}
              title="No announcements"
              subtitle="Check back later for company updates."
              minHeight={160}
            />
          )}
        </FadeInView>

        <FadeInView delay={180}>
          <SectionHeader title="Upcoming Event" />
          {upcomingEvent ? (
            <UpcomingEventCard event={upcomingEvent} />
          ) : (
            <EmptyState
              icon={Megaphone}
              title="No upcoming events"
              subtitle="New events will appear here."
              minHeight={140}
            />
          )}
        </FadeInView>

        <View style={{ height: 24 }} />
      </ScrollView>
    </ScreenWrapper>
  );
}
