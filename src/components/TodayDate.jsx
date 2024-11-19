import moment from "moment";
import "../styling/TodayDate.css";

const TodayDate = () => {
  const today = moment();

  const formattedDate = today.format("DD MMM YYYY");

  const dayName = today.format("dddd");

  return (
    <div className="dateContainer">
      <p className="dayName">{dayName}</p>
      <p className="formattedDate">{formattedDate}</p>
    </div>
  );
};

export default TodayDate;
