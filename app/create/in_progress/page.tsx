import CreateTaskInProgress from "./createin_progress";
export default function page() {
  return (
    <div className="p-5 lg:container">
      <h1 className="text-center font-bold text-2xl">
        Create task In Progress
      </h1>
      <CreateTaskInProgress />
    </div>
  );
}
