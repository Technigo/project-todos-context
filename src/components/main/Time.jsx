export const Time = ({ weekday, date }) => {
  return (
    <time style={{ listStyle: "none" }}>
      <li>{weekday}{' '}🧀</li>
      <li>{date}</li>
    </time>
  );
};