import { Link } from "react-router-dom";
import { Job } from "../lib/types";
import { formatDate } from "../lib/formatters";

export interface JobListProps {
  jobs: Job[];
}

export function JobList({ jobs }: JobListProps) {
  return (
    <ul className="box">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
}

interface JobItemProps {
  job: Job;
}

function JobItem({ job }: JobItemProps) {
  const title = job.company ? `${job.title} at ${job.company.name}` : job.title;

  return (
    <li className="media">
      <div className="media-left has-text-grey">{formatDate(job.date)}</div>
      <div className="media-content">
        <Link to={`/jobs/${job.id}`}>{title}</Link>
      </div>
    </li>
  );
}
