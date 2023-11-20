export default function calculatePercentageFromTotal(data, period) {
  const targetPeriod = data.find((item) => item.period === period);
  const totalOfPeriod =
    targetPeriod.personal +
    targetPeriod.shopping +
    targetPeriod.phone +
    targetPeriod.other;
  return totalOfPeriod;
}
