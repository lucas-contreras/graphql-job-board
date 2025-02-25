import { useParams } from "react-router";
import { companies } from "../lib/fake-data";

export function CompanyPage() {
  const { companyId } = useParams();

  const company = companies.find((company) => company.id === companyId);

  if (!company) {
    return <div>company not found</div>;
  }

  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
    </div>
  );
}
