import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { profile } from "console";
import NextAuth, { Account, DefaultSession, Profile } from "next-auth";
import Discord from "next-auth/providers/discord";
import { CustomUser } from "./interfaces/CustomUser";
import prisma from "./util/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Discord({
      authorization:
        "https://discord.com/api/oauth2/authorize?scope=guilds+guilds.join+identify+email",
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      session.user.id = user.id;
      return Promise.resolve(session);
    },
  },
});
