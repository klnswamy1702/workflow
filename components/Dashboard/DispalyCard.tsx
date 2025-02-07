import { TrashIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Task } from "@prisma/client";
import { format, formatDistanceToNow } from "date-fns";
import EditComponent from "../EditTask";
import DeleteTask from "./Delete";

export default function DisplayCard({ data }: { data: Task }) {
  const formattedDueDate = data.dueDate
    ? format(new Date(data.dueDate), "PPPpp")
    : "No deadline";

  const relativeCreatedAt = data.createdAt
    ? formatDistanceToNow(new Date(data.createdAt), {
        addSuffix: true,
      })
    : "No created date";

  const badgeColor =
    {
      low: "bg-green-400",
      medium: "bg-yellow-400",
      urgent: "bg-red-400",
    }[data.priority ? data.priority.toString() : "No priority"] ||
    "bg-gray-400";

  return (
    <div className="p-3 border rounded-lg dark:bg-gray-900 bg-gray-100 flex flex-col gap-3 mt-2">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">{data.title}</h1>
      </div>

      <p className="text-md text-muted-foreground">
        {data.description || "No description"}
      </p>

      <Badge className={`w-fit ${badgeColor} text-md`}>
        {data.priority || "No priority"}
      </Badge>

      <h1 className="text-sm">
        Deadline:{" "}
        <span className="text-muted-foreground">{formattedDueDate}</span>
      </h1>
      <h1 className="text-sm">Created {relativeCreatedAt}</h1>

      <div className="flex items-center gap-1 mt-2">
        <EditComponent data={data} />
        <DeleteTask id={data.id} />
      </div>
    </div>
  );
}
