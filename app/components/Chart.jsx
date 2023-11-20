import getSegmentPercentagePerTotal from "../common/helpers/UtilsKit";

export default function Chart({ data }) {
  const { totalOfPeriod, percentages } = getSegmentPercentagePerTotal(
    data,
    "1M"
  );

  console.log(totalOfPeriod, percentages);
  return (
    <div className="border-8 rounded-full border-primary">
      <div className="rounded-full w-full h-full p-44 bg-gray-100">
        {/* {percentage} */}
      </div>
    </div>
  );
}
