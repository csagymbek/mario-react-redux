import { Link } from "react-router-dom";
import { ProjectSummary } from "./ProjectSummary";

export const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects?.map(
        ({
          id,
          content,
          title,
          authorFirstName,
          authorLastName,
          createdAt,
        }) => (
          <Link to={`/project/${id}`} key={id}>
            <ProjectSummary
              content={content}
              title={title}
              authorFirstName={authorFirstName}
              authorLastName={authorLastName}
              createdAt={createdAt}
            />
          </Link>
        )
      )}
    </div>
  );
};
