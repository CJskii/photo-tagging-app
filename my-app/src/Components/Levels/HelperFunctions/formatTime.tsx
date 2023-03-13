const formatTime = (time: number) => {
  const date = new Date(time * 1000); // create a new date object from time in seconds
  const hours = date.getUTCHours().toString().padStart(2, "0"); // extract hours and pad with leading zero
  const minutes = date.getUTCMinutes().toString().padStart(2, "0"); // extract minutes and pad with leading zero
  const seconds = date.getUTCSeconds().toString().padStart(2, "0"); // extract seconds and pad with leading zero
  return `${hours}:${minutes}:${seconds}`; // return formatted time string
};

export default formatTime;
