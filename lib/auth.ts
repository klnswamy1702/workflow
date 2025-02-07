import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import google from "next-auth/providers/google";
import github from "next-auth/providers/github";
import Resend from "next-auth/providers/resend";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Resend({
      from: "workflow@mayankughade.tech",
    }),
    google,
    github,
  ],
});
