import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Intro from '@/components/intro';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isReady, setIsReady] = useState(false);
  const [hasVisited, setHasVisited] = useState<boolean | null>(null);
useEffect(() => {
    const checkVisited = async () => {
      try {
        const visited = await AsyncStorage.getItem('visited');
        setHasVisited(false);
      } catch (e) {
        console.error('Error reading visited flag', e);
        setHasVisited(false);
      } finally {
        setIsReady(true);
      }
    };

    checkVisited();
  }, []);
  if (!hasVisited) {
    return (
      <Intro setReady={setHasVisited}/>
    );
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors['light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Mensagens',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
