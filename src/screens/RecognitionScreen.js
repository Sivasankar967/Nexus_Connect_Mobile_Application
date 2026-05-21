import { useState, useCallback, useEffect } from 'react';
import { View, TouchableOpacity, RefreshControl } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Plus, Heart } from 'lucide-react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import RecognitionPostCard from '../components/RecognitionPostCard';
import ScreenHeader from '../components/ScreenHeader';
import FadeInView from '../components/FadeInView';
import { EmptyState } from '../components/Card';
import { RecognitionFeedSkeleton } from '../components/Skeleton';
import { useAuthStore } from '../store/authStore';
import { useResponsive } from '../hooks/useResponsive';

export default function RecognitionScreen({ navigation }) {
  const posts = useAuthStore((s) => s.recognitionPosts);
  const refreshUser = useAuthStore((s) => s.refreshUser);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const { padding, fabSize, listMinHeight } = useResponsive();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refreshUser();
    setTimeout(() => setRefreshing(false), 800);
  }, [refreshUser]);

  return (
    <ScreenWrapper>
      <FadeInView style={{ flex: 1, paddingHorizontal: padding, paddingTop: 8 }}>
        <ScreenHeader
          title="Recognition"
          subtitle="Celebrate your colleagues"
          right={
            <TouchableOpacity
              onPress={() => navigation.navigate('PostRecognition')}
              className="bg-teal rounded-full items-center justify-center"
              style={{ width: fabSize, height: fabSize }}
              activeOpacity={0.85}
            >
              <Plus size={fabSize * 0.5} color="#FFFFFF" strokeWidth={2.5} />
            </TouchableOpacity>
          }
        />

        {loading ? (
          <RecognitionFeedSkeleton count={4} />
        ) : (
          <View style={{ flex: 1, minHeight: 200 }}>
            <FlashList
              data={posts}
              estimatedItemSize={180}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <RecognitionPostCard post={item} />}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  tintColor="#0EA5E9"
                />
              }
              ListEmptyComponent={
                <EmptyState
                  icon={Heart}
                  title="No recognition yet"
                  subtitle="Be the first to appreciate a colleague's great work."
                  actionLabel="Post Recognition"
                  onAction={() => navigation.navigate('PostRecognition')}
                  minHeight={listMinHeight}
                />
              }
              contentContainerStyle={
                posts.length === 0 ? { flexGrow: 1 } : { paddingBottom: 24 }
              }
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </FadeInView>
    </ScreenWrapper>
  );
}
