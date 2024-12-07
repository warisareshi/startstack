import env from "@/env";
import {
  magicLinkClient,
  organizationClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_APP_URL,
  plugins: [organizationClient(), magicLinkClient()],
});

export const { signIn, signOut, signUp, useSession, revokeSession, updateUser, getSession } = authClient;
