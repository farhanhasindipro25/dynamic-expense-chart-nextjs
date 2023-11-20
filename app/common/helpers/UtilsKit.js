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
