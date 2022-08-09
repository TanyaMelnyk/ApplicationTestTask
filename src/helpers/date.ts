export const getDateFromMs = (ms: number) => {
  const date = new Date(ms);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getTimeMs = (ms: number) => {
  const date = new Date(ms);
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
