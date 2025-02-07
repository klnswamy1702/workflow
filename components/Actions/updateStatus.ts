"use server";

import prisma from "@/lib/db";
import { TaskStatus } from "@prisma/client";

export async function UpdateState(id: string, status: TaskStatus) {
  await prisma.task.update({
    where: { id },
    data: {
      status,
    },
  });
}
