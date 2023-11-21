import getSegmentPercentagePerTotal, {
  CalculatePortionStartingPoints,
  generateConicGradientString,
} from "../common/helpers/UtilsKit";

export default function Chart({ data }) {
  const { totalOfPeriod: total_1M, percentages: percentages_1M } =
    getSegmentPercentagePerTotal(data, "1M");
  const { totalOfPeriod: total_6M, percentages: percentages_6M } =
    getSegmentPercentagePerTotal(data, "6M");
  const { totalOfPeriod: total_1Y, percentages: percentages_1Y } =
    getSegmentPercentagePerTotal(data, "1Y");
  const { totalOfPeriod: total_All, percentages: percentages_All } =
    getSegmentPercentagePerTotal(data, "ALL TIME");

  //   console.log(total_1M, percentages_1M);
  //   console.log(total_6M, percentages_6M);
  //   console.log(total_1Y, percentages_1Y);
  //   console.log(total_All, percentages_All);

  const PORTION_COLORS = {
    personal: "#4C49ED",
    shopping: "#141197",
    phone: "#9D9BF4",
    other: "#4FD18B",
  };
  const portionStartingPoints_1Y =
    CalculatePortionStartingPoints(percentages_1Y);
  console.log(portionStartingPoints_1Y);

  const gradientString = generateConicGradientString(
    portionStartingPoints_1Y,
    PORTION_COLORS
  );
  console.log(gradientString);

  //   const gradientString = CalculatePortionStartingPoints(
  //     percentages_1M,
  //     PORTION_COLORS
  //   );
  //   console.log(gradientString);

  return (
    // <div className="w-100 h-100 relative">
    //   {portions}
    //   <div className="relative rounded-full p-8 bg-gray-100">{total_1M}</div>
    // </div>
    <div class="flex items-center justify-center rounded-full h-screen">
      <div class="relative w-48 h-48 rounded-full">
        <div
          class="absolute w-full rounded-full h-full"
          style={{
            background: gradientString,
            //   "conic-gradient(#3490dc 0% 25%, #38a169 25% 50%, #f6e05e 50% 75%, #e53e3e 75% 100%)",
          }}
        ></div>
      </div>
    </div>
  );
}
