import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useResponsive } from '../hooks/useResponsive';

export default function ScreenWrapper({ children, className = '', edges = ['top', 'left', 'right'] }) {
  const { width } = useResponsive();

  return (
    <SafeAreaView edges={edges} className={`flex-1 bg-navy ${className}`}>
      <View className="flex-1 w-full self-center" style={{ maxWidth: width }}>
        {children}
      </View>
    </SafeAreaView>
  );
}
