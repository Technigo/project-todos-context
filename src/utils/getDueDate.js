import moment from "moment";

const getDueStatus = (dueDate) => {
  const today = moment();
  const due = moment(dueDate);
  const daysUntilDue = due.diff(today, "days");

  if (daysUntilDue < 0) {
    return `${Math.abs(daysUntilDue)} days overdue`;
  } else if (daysUntilDue === 0) {
    return "Due today";
  } else if (daysUntilDue === 1) {
    return "Due tomorrow";
  } else {
    return `Due in ${daysUntilDue} days`;
  }
};

export default getDueStatus;
