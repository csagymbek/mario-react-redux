import moment from "moment";

export const Notifications = (props) => {
  const { notifications } = props;

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications?.map(({ content, id, user, time }) => (
              <li key={id}>
                <span className="pink-text">{user} </span>
                <span>{content}</span>
                <div className="grey-text note-date">
                  {moment(time.toDate()).fromNow()}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
