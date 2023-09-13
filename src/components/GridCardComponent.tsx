import Card from "./CardComponent";
import { useEffect, useState } from "react";
import { Activity } from "../types/Activity";

type DayProps = {
  dayText: string;
  dayString: string;
};

const GridCard: React.FC<DayProps> = ({ dayText, dayString }) => {
  const [sessions, setSessions] = useState<Activity[]>([]);

  useEffect(() => {
    fetch("api/admin/activities")
      .then((data) => data.json())
      .then((json) => setSessions(json.activities))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <p style={{ textAlign: "center" }}>{dayText}</p>
        {sessions?.map(({ day, title, description, coach, time, id }) =>
          day === dayString ? (
            <div key={id}>
              <Card
                activityId={id}
                title={title}
                time={time}
                description={description}
                coach={coach}
                day={day}
              />
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default GridCard;

// {exportSessions().map((session) =>
//   session.day === dayString ? (
//     <Card
//       title={session.title}
//       date={session.date}
//       time={session.time}
//     />
//   ) : (
//     ""
//   )
// )}
