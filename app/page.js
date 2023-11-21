import getSegmentPercentagePerTotal, {
  CalculatePortionStartingPoints,
  generateConicGradientString,
} from "./common/helpers/UtilsKit";
import CategoryDescription from "./components/CategoryDescription";
import Chart from "./components/Chart";

const EXPENSE_DATA = [
  {
    period: "1M", // 150 + 90 + 60 + 80 = 380
    personal: 150,
    shopping: 90,
    phone: 60,
    other: 80,
  },
  {
    period: "6M", // 320 + 240 + 255 + 298 = 1113
    personal: 320,
    shopping: 240,
    phone: 255,
    other: 298,
  },
  {
    period: "1Y", // 950 + 930 + 738 + 490 = 3108
    personal: 950,
    shopping: 930,
    phone: 738,
    other: 490,
  },
  {
    period: "ALL TIME", // 1800 + 1420 + 1265 + 1000 = 5485
    personal: 1800,
    shopping: 1420,
    phone: 1265,
    other: 1000,
  },
];
const PORTION_COLORS = {
  personal: "#4C49ED",
  shopping: "#141197",
  phone: "#9D9BF4",
  other: "#4FD18B",
};

export default function Home() {
  const { totalOfPeriod: total_1M, percentages: percentages_1M } =
    getSegmentPercentagePerTotal(EXPENSE_DATA, "1M");
  const { totalOfPeriod: total_6M, percentages: percentages_6M } =
    getSegmentPercentagePerTotal(EXPENSE_DATA, "6M");
  const { totalOfPeriod: total_1Y, percentages: percentages_1Y } =
    getSegmentPercentagePerTotal(EXPENSE_DATA, "1Y");
  const { totalOfPeriod: total_All, percentages: percentages_All } =
    getSegmentPercentagePerTotal(EXPENSE_DATA, "ALL TIME");

  const portionStartingPoints_1Y =
    CalculatePortionStartingPoints(percentages_1Y);
  console.log(portionStartingPoints_1Y);

  const gradientString = generateConicGradientString(
    portionStartingPoints_1Y,
    PORTION_COLORS
  );
  console.log(gradientString);
  return (
    <div className="bg-white w-1/2 h-3/4 rounded-3xl absolute">
      <div className="relative -top-28">
        <Chart data={EXPENSE_DATA} gradientString={gradientString} />
      </div>
      <div className="relative -top-80 flex justify-center">
        <CategoryDescription />
      </div>
    </div>
  );
}
