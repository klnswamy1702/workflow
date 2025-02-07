"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="mt-3 border-b">
      <div className="lg:container p-3 flex items-start justify-between mb-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={30} height={30} />
          <h1 className="font-bold text-2xl">WorkFlow</h1>
        </Link>

        <div className="flex items-center gap-2">
          {session ? (
            <Button onClick={() => signOut()}>Sign-out</Button>
          ) : (
            <Button onClick={() => signIn()}>Login</Button>
          )}

          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
