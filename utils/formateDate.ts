const formateDate = (timestamp: string): string => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateObj = new Date(timestamp);
  const month = months[dateObj.getMonth()];
  let date = dateObj.getDate();
  let year = dateObj.getFullYear();
  return `${date} ${month} ${year}`;
};
export default formateDate;

const getTime = (timestamp: string): string => {
  const dateObj = new Date(timestamp);
  return `${dateObj.getHours()}:${dateObj.getMinutes()}`;
};
export { getTime };
