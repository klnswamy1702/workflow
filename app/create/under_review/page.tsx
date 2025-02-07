import CreateTaskUnderReview from "./create_under_review";

export default function page() {
  return (
    <div className="p-5 lg:container">
      <h1 className="text-center font-bold text-2xl">
        Create Task Under review
      </h1>
      <CreateTaskUnderReview />
    </div>
  );
}
