import { useState } from "react";
import type { ReactNode } from "react";

import { AuthContext } from "./AuthContext";

import type { IUser } from "../types/User";

import {
  signInWithPopup,
  signOut as firebaseSignOut,
} from "firebase/auth";

import { auth, googleProvider } from "../firebase/firebase";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      const result = await signInWithPopup(auth, googleProvider);

      const firebaseUser = result.user;

      setUser({
        uid: firebaseUser.uid,
        displayName: firebaseUser.displayName,
        email: firebaseUser.email,
        photoURL: firebaseUser.photoURL,
      });
    } catch (error) {
      console.error("Erro ao realizar login:", error);
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    try {
      await firebaseSignOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Erro ao realizar logout:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}