import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function getSegmentPercentagePerTotal(data, period) {
  const targetPeriod = data.find((item) => item.period === period);

  if (!targetPeriod) {
    // Returning an empty object if no period is found
    return {};
  }

  const totalOfPeriod = Object.values(targetPeriod).reduce(
    (acc, value) => acc + (isNaN(value) ? 0 : value),
    0
  );

  const percentages = {};

  Object.keys(targetPeriod).forEach((segment) => {
    if (segment !== "period") {
      const targetSegment = targetPeriod[segment];
      const percentage = (targetSegment / totalOfPeriod) * 100;

      percentages[segment] = isNaN(percentage) ? 0 : percentage;
    }
  });

  return { totalOfPeriod, percentages };
}

export function CalculatePortionStartingPoints(percentages) {
  const cumulativePercentages = {};
  let cumulativePercentage = 0;

  Object.keys(percentages).forEach((segment) => {
    cumulativePercentage += percentages[segment];
    cumulativePercentages[segment] = cumulativePercentage;
    cumulativePercentages;
  });
  return cumulativePercentages;
}

export function generateConicGradientString(percentage, color) {
  const personalStartingPoint = 0;
  const personalEndingPoint = percentage.personal;
  const shoppingStartingPoint = percentage.personal + 1;
  const shoppingEndingPoint = percentage.shopping;
  const phoneStartingPoint = percentage.shopping + 1;
  const phoneEndingPoint = percentage.phone;
  const otherStartingPoint = percentage.phone + 1;
  const otherEndingPoint = percentage.other;

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
  const gradientString = `conic-gradient(${personalSegmentString}, ${shoppingSegmentString}, ${phoneSegmentString}, ${otherSegmentString})`;
  return gradientString;
}

// tailwindcss classNames management
export function cn(...classnames) {
  return twMerge(clsx(classnames));
}
