import { auth } from "@/lib/auth";
import { Button } from "../ui/button";
import Link from "next/link";
import DisplayCard from "./DispalyCard";
import {
  FetchCompleted,
  FetchInProgress,
  FetchTodos,
  FetchUnderReview,
} from "../Actions/fetchdata";
import { Task } from "@prisma/client";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DragDropable from "./DragDropable";

export default async function Dashboard() {
  const session = await auth();
  const ToDo = await FetchTodos();
  const Inprogress = await FetchInProgress();
  const UnderReview = await FetchUnderReview();
  const Completed = await FetchCompleted();

  return (
    <div className="p-5 lg:container">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl">
          Welcome to your dashboard {session?.user?.name}
        </h1>

        <Link href="/create">
          <Button>Create Task</Button>
        </Link>
      </div>
      <DragDropable
        ToDo={ToDo}
        Inprogress={Inprogress}
        UnderReview={UnderReview}
        Completed={Completed}
      />
    </div>
  );
}
