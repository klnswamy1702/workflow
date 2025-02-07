import CreateTaskCompleted from "./create_completed";

export default function page() {
  return (
    <div className="p-5 lg:container">
      <h1 className="text-center font-bold text-2xl">Create task Completed</h1>
      <CreateTaskCompleted />
    </div>
  );
}
