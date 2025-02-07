import CreateTask from "./form";

export default function page() {
  return (
    <div className="p-5 lg:container">
      <h1 className="text-center font-bold text-2xl">Create new task</h1>
      <CreateTask />
    </div>
  );
}
