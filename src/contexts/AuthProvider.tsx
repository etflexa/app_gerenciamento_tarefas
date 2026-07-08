import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { AuthContext } from "./AuthContext";
import type { IUser } from "../types/User";

import {
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";

import { auth, googleProvider } from "../firebase/firebase";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  /**
   * Converte o usuário do Firebase para o modelo da aplicação.
   * Assim evitamos duplicar código.
   */
  function mapFirebaseUser(firebaseUser: User): IUser {
    return {
      uid: firebaseUser.uid,
      displayName: firebaseUser.displayName,
      email: firebaseUser.email,
      photoURL: firebaseUser.photoURL,
    };
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(mapFirebaseUser(firebaseUser));
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
  console.log("Usuário atualizado:", user);
}, [user]);

  async function signIn() {
    try {
      setLoading(true);

      const result = await signInWithPopup(auth, googleProvider);

      setUser(mapFirebaseUser(result.user));
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