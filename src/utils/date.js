import { DAYS } from '../constants/day';

const range = end => {
  const { result } = Array.from({ length: end }).reduce(
    ({ result, current }, _) => ({
      result: [...result, current],
      current: current + 1
    }),
    { result: [], current: 1 }
  );

  return result;
};

const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const getSortedDays = (month, year) => {
  const dayIndex = new Date(year, month, 1).getDay();
  return [...DAYS.slice(dayIndex), ...DAYS.slice(0, dayIndex)];
};

const getDateObj = (day, month, year) => {
  return new Date(year, month, day);
};

const areDatesTheSame = (first, second) => {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
};

const getRandomDateColor = () => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
};

export {
  range,
  getDaysInMonth,
  getSortedDays,
  getDateObj,
  areDatesTheSame,
  getRandomDateColor
};
