// MONTH ENUM
export const MONTH = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

export const getDuration = (startDate, duration) => {
  const start = new Date(startDate._seconds * 1000);
  const end = new Date(startDate._seconds * 1000 + duration * 86400000);
  const string = start.getDate().toString() +
    ' ' +
    MONTH[start.getMonth().toString()] +
    ' - ' +
    end.getDate().toString() +
    ' ' +
    MONTH[end.getMonth().toString()];
  return string;
};
