"use client";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-5 lg:container">
      <div className="flex flex-col gap-3 text-center justify-center mt-[50px]">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-center">
          Streamline Your Workflow with Ease
        </h1>
        <p className="text-muted-foreground md:text-xl">
          Workflow is a powerful task management application that helps you and
          your team stay organized and productive.
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button onClick={() => signIn()}>Learn More</Button>
        <Button onClick={() => signIn()} variant="outline">
          Get Started
        </Button>
      </div>
      <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-gray-900 lg:w-[1000px]">
        <img
          src="/application-light.png"
          alt="Workflow"
          className="object-cover object-center w-full h-full p-1 dark:hidden "
        />
        <img
          src="/application-dark.png"
          alt="Workflow"
          className="object-cover object-center w-full h-full p-1 hidden dark:block"
        />
      </div>
    </div>
  );
}
