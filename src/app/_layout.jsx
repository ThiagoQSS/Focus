import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='index' />
    </Stack>
  );
}

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
