import { Redirect, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function Home() {
  const router = useRouter();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.replace("/login");
    }
  });

  return <Redirect href='/home' />;
}
