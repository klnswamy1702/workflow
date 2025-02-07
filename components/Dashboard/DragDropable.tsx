"use client";

import { Button } from "../ui/button";
import { Task } from "@prisma/client";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import DisplayCard from "./DispalyCard";
import { useState } from "react";
import { UpdateState } from "../Actions/updateStatus";
import Link from "next/link";

export default function DragDropable({
  ToDo,
  Inprogress,
  UnderReview,
  Completed,
}: {
  ToDo: Task[];
  Inprogress: Task[];
  UnderReview: Task[];
  Completed: Task[];
}) {
  // Initialize columns state
  const [columns, setColumns] = useState([
    { id: "todo", title: "To Do", tasks: ToDo },
    { id: "in_progress", title: "In Progress", tasks: Inprogress },
    { id: "under_review", title: "Under Review", tasks: UnderReview },
    { id: "completed", title: "Completed", tasks: Completed },
  ]);

  const onDragEnd = async (result: any) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = columns.find((col) => col.id === source.droppableId);
    const destinationColumn = columns.find(
      (col) => col.id === destination.droppableId
    );

    if (!sourceColumn || !destinationColumn) return;

    const [movedTask] = sourceColumn.tasks.splice(source.index, 1);
    destinationColumn.tasks.splice(destination.index, 0, movedTask);

    setColumns(
      columns.map((col) => {
        if (col.id === source.droppableId) {
          return { ...col, tasks: sourceColumn.tasks };
        }
        if (col.id === destination.droppableId) {
          return { ...col, tasks: destinationColumn.tasks };
        }
        return col;
      })
    );
    await UpdateState(movedTask.id, destination.droppableId);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-3 p-3 mt-2">
        {columns.map((column) => (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <h1 className="text-xl font-semibold mb-3">{column.title}</h1>
                {column.tasks.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <DisplayCard data={task} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <Link href={`/create/${column.id}`}>
                  <Button className="w-full mt-2">Add Task</Button>
                </Link>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
