import Link from "next/link";

const projects = {
  "1": { 
    title: "Website Redesign", 
    description: "Website work",
    issues: [
      { id: 1, title: "Add dark mode support", status: "backlog" },
      { id: 2, title: "Optimize image loading", status: "backlog" },
      { id: 3, title: "Create unit tests", status: "backlog" },
      { id: 4, title: "Fix navigation menu on mobile", status: "inProgress" },
      { id: 5, title: "Add user authentication", status: "inProgress" },
      { id: 6, title: "Update documentation", status: "done" },
    ],
  },
  "2": { title: "Mobile App", description: "Mobile app work", issues: [] },
  "3": { title: "API Migration", description: "API migration work", issues: [] },
};

export default function ProjectPage({ params }) {
  const id = params?.id;
  const project = id ? projects[id] : undefined;

  const statuses = {
    backlog: "Backlog",
    inProgress: "In Progress",
    done: "Done",
  };

  const getIssuesByStatus = (status) => {
    return project?.issues.filter((issue) => issue.status === status) || [];
  };
  
  return (
    <div className="p-8">
      <Link href="/dashboard">← Back</Link>

      <div className="mt-6 p-4 bg-yellow-50 rounded border">
        <p><strong>Debug</strong></p>
        <p>params.id: <code>{String(id)}</code></p>
        <p>project found: <code>{project ? "yes" : "no"}</code></p>
        <p>available keys: <code>{Object.keys(projects).join(", ")}</code></p>
      </div>

      {project ? (
        <div className="mt-6">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <p className="text-gray-600">{project.description}</p>

          <div className="mt-6 grid grid-cols-3 gap-4">
            {Object.keys(statuses).map((statusKey) => (
              <div key={statusKey} className="p-4 bg-gray-100 rounded">
                <h3 className="font-bold text-xl">{statuses[statusKey]}</h3>
                <ul className="mt-2">
                  {getIssuesByStatus(statusKey).map((issue) => (
                    <li key={issue.id} className="p-2 mt-2 bg-white border rounded">
                      {issue.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 text-red-600">Project not found</div>
      )}
    </div>
  );
}
