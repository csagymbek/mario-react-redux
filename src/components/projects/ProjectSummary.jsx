export const ProjectSummary = ({
  content,
  title,
  authorFirstName,
  authorLastName,
  createdAt,
}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>
          Posted by {authorFirstName} {authorLastName}
        </p>
        <p className="grey-text">
          Last {createdAt.toDate().toString().slice(0, 15)}
        </p>
      </div>
    </div>
  );
};
