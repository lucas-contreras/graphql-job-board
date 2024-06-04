export interface Company {
    id: string;
    name: string;
    description: string;
}

export interface Job {
    id: string;
    title: string;
    date: string;
    company: Company;
    description: string;
}