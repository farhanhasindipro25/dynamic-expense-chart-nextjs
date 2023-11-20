import calculatePercentageFrom1MSegment from "../common/helpers/UtilsKit";

export default function Chart({ data }) {
  const calculate1MData = () => {};
  const calculate6MData = () => {};
  const calculate1YData = () => {};
  const calculateAllTimeData = () => {};
  return (
    <div className="border-8 rounded-full border-primary">
      <div className="rounded-full w-full h-full p-44 bg-gray-100">
        {calculatePercentageFrom1MSegment(data, "1M")}
      </div>
    </div>
  );
}
