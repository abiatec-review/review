import React, { useState, useEffect } from "react";

import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Text, SafeAreaView } from "react-native";

type User = FirebaseAuthTypes.User | null;

export function LoginScreen() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User>(null);

  function onAuthStateChanged(user: User) {
    setUser(user);
    initializing && setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <SafeAreaView>
      {user ? (
        <Text>Welcome {user.email}</Text>
      ) : (
        <Text style={{ color: "white", fontSize: 30 }}>Login</Text>
      )}
    </SafeAreaView>
  );
}
