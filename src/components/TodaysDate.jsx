import moment from "moment";
import "./TodaysDate.css";

export const TodaysDate = () => {
  // Current date
  const currentDate = moment();

  // Display which day it is today
  const todayDay = currentDate.format("dddd");

  // Display month, date and year
  const formattedDate = currentDate.format("MMMM D, YYYY");

  return (
    <div className="date-container">
      <h2>{todayDay}</h2>
      <p>{formattedDate}</p>
    </div>
  );
};
