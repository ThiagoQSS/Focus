import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#484776ff', '#121111ff']}
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Stack.Screen name="index" />
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

export const AppRoutes = {
  // --- Rotas Estáticas ---
  // Usadas para telas que não precisam de parâmetros.
  LOGIN: '/auth/Login',
  SIGNIN: '/auth/Signin',
  HOME: '/pages/Home',
  SETTINGS: '/pages/Settings',
  NOTIFICATIONS: '/pages/Notifications',
  CHAT: '/pages/Chat',
  LEARNING: '/pages/learning',
  SELF_EVALUATION: '/pages/SelfEvaluation',
  EDIT_INFO: '/pages/editinfo',
  VACINE: '/pages/Vacine',
  PREGNANCY: '/pages/pregnancy',
  SCHEDULE: '/pages/schedule',
};
