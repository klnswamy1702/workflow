"use server";

import prisma from "@/lib/db";
import { Task } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function FetchSingleData(id: string) {
  revalidatePath("/");
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
}

export async function EditData(id: string, values: Task) {
  revalidatePath("/");
  return prisma.task.update({
    where: {
      id,
    },
    data: {
      ...values,
    },
  });
}

export async function DeleteData(id: string) {
  revalidatePath("/");
  await prisma.task.delete({
    where: {
      id,
    },
  });
}
