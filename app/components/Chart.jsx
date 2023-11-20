import getSegmentPercentagePerTotal from "../common/helpers/UtilsKit";

export default function Chart({ data }) {
  const { totalOfPeriod: total_1M, percentages: percentages_1M } =
    getSegmentPercentagePerTotal(data, "1M");
  const { totalOfPeriod: total_6M, percentages: percentages_6M } =
    getSegmentPercentagePerTotal(data, "6M");
  const { totalOfPeriod: total_1Y, percentages: percentages_1Y } =
    getSegmentPercentagePerTotal(data, "1Y");
  const { totalOfPeriod: total_All, percentages: percentages_All } =
    getSegmentPercentagePerTotal(data, "ALL TIME");

  console.log(total_1M, percentages_1M);
  console.log(total_6M, percentages_6M);
  console.log(total_1Y, percentages_1Y);
  console.log(total_All, percentages_All);
  return (
    <div className="border-8 rounded-full border-primary">
      <div className="rounded-full w-full h-full p-44 bg-gray-100">
        {/* {percentage} */}
      </div>
    </div>
  );
}
