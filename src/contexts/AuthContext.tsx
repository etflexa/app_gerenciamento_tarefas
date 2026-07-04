import { createContext } from "react";
import type { IUser } from "../types/User";

export interface AuthContextData {
  user: IUser | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);