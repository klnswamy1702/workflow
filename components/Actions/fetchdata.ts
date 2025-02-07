"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { TaskStatus } from "@prisma/client";

export async function FetchTodos() {
  const session = await auth();
  const userEmail = session?.user?.email as string;
  return await prisma.task.findMany({
    where: {
      userEmail,
      status: TaskStatus.todo,
    },
  });
}

export async function FetchInProgress() {
  const session = await auth();
  const userEmail = session?.user?.email as string;
  return await prisma.task.findMany({
    where: {
      userEmail,
      status: TaskStatus.in_progress,
    },
  });
}

export async function FetchUnderReview() {
  const session = await auth();
  const userEmail = session?.user?.email as string;
  return await prisma.task.findMany({
    where: {
      userEmail,
      status: TaskStatus.under_review,
    },
  });
}

export async function FetchCompleted() {
  const session = await auth();
  const userEmail = session?.user?.email as string;
  return await prisma.task.findMany({
    where: {
      userEmail,
      status: TaskStatus.completed,
    },
  });
}
