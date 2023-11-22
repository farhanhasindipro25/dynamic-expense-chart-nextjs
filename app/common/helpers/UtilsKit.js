import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// This function calculates the percentage of each segment per total and the total of each period.
export default function getSegmentPercentagePerTotal(data, period) {
  // Finding the object containing the specific period
  const targetPeriod = data.find((item) => item.period === period);
  // Returning an empty object if no period is found
  if (!targetPeriod) {
    return {};
  }
  // calculating the total value of that period's expense categories
  const totalOfPeriod = Object.values(targetPeriod).reduce(
    (acc, value) => acc + (isNaN(value) ? 0 : value),
    0
  );
  const percentages = {};
  // Looping through the specific period object to calculate the percentages of each segment
  Object.keys(targetPeriod).forEach((segment) => {
    // checking for the case where the segment(category) is not the value 'period' for the sake of the data structure.
    if (segment !== "period") {
      const targetSegment = targetPeriod[segment];
      const percentage = (targetSegment / totalOfPeriod) * 100;
      // gathering all segment percentages in an object
      percentages[segment] = isNaN(percentage) ? 0 : percentage;
    }
  });
  return { totalOfPeriod, percentages };
}

// This function calculates the percentages from where each segment should start
export function CalculatePortionStartingPoints(percentages) {
  const cumulativePercentages = {};
  let cumulativePercentage = 0;

  // looping through the calculated percentages object to calculate the cumulative percentage.
  Object.keys(percentages).forEach((segment) => {
    cumulativePercentage += percentages[segment];
    // gathering all segment cumulative percentages in an object
    cumulativePercentages[segment] = cumulativePercentage;
    cumulativePercentages;
  });
  return cumulativePercentages;
}

// This function generates the conic gradient string for the pie chart
export function generateConicGradientString(percentage, color) {
  // variable declarations of each segments starting and ending points.
  const personalStartingPoint = 0;
  const personalEndingPoint = percentage.personal;
  const shoppingStartingPoint = percentage.personal;
  const shoppingEndingPoint = percentage.shopping;
  const phoneStartingPoint = percentage.shopping;
  const phoneEndingPoint = percentage.phone;
  const otherStartingPoint = percentage.phone;
  const otherEndingPoint = percentage.other;


  // generating strings for each segment according to CSS's conic gradient syntax
  const personalSegmentString = `${color["personal"]} ${parseFloat(
    personalStartingPoint
  ).toFixed(2)}% ${parseFloat(personalEndingPoint).toFixed(2)}%`;
  const shoppingSegmentString = `${color["shopping"]} ${parseFloat(
    shoppingStartingPoint
  ).toFixed(2)}% ${parseFloat(shoppingEndingPoint).toFixed(2)}%`;
  const phoneSegmentString = `${color["phone"]} ${parseFloat(
    phoneStartingPoint
  ).toFixed(2)}% ${parseFloat(phoneEndingPoint).toFixed(2)}%`;
  const otherSegmentString = `${color["other"]} ${parseFloat(
    otherStartingPoint
  ).toFixed(2)}% ${parseFloat(otherEndingPoint).toFixed(2)}%`;

  // Using string interpolation to concatenate each segments string into one final string according to CSS's conic gradient syntax, separated by commas.
  const gradientString = `conic-gradient(${personalSegmentString}, ${shoppingSegmentString}, ${phoneSegmentString}, ${otherSegmentString})`;
  return gradientString;
}

// tailwindcss classNames management
export function cn(...classnames) {
  return twMerge(clsx(classnames));
}
