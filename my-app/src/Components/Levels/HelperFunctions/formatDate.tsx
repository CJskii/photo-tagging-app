const formatDate = (timestamp: number) => {
  const formattedString = new Intl.DateTimeFormat("en-UK", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(timestamp);

  return formattedString;
};

export default formatDate;
