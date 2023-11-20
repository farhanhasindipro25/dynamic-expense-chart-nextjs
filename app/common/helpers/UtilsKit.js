
export default function getSegmentPercentagePerTotal(data, period, segment) {
  const targetPeriod = data.find((item) => item.period === period);
  const targetSegment = targetPeriod[segment];
  const totalOfPeriod =
    targetPeriod.personal +
    targetPeriod.shopping +
    targetPeriod.phone +
    targetPeriod.other;
  const percentage = (targetSegment / totalOfPeriod) * 100;
  return { totalOfPeriod, percentage };
}
