import { Redirect, Stack } from "expo-router";
import { UserAuth } from "../../auth/AuthContext";

export default function AppLayout() {
  const { user } = UserAuth();

  if (!user) {
    return <Redirect href='/login' />;
  }

  return <Stack />;
}
