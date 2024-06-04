import { JobList } from "../components/JobList";
import { jobs } from "../lib/fake-data";

export function HomePage() {
  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}
