import { Colors } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: 'transparent' },
          headerTransparent: false,
          headerTitle: '',
          headerTintColor: Colors.white,
          headerStyle: { backgroundColor: 'transparent' },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="Notes" options={{animation: 'slide_from_bottom', headerTitle: 'Anotações'}} />
        <Stack.Screen name="Anotation" options={({route}) => ({animation: 'slide_from_right', headerTitle: route.params?.title})} />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

