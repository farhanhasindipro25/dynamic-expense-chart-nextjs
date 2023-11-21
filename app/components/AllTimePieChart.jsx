import CategoryDescription from "./CategoryDescription";
import Chart from "./Chart";

export default function AllTimePieChart({ data, total, gradientString }) {
  return (
    <div>
      <div className="relative -top-32">
        <Chart data={data} gradientString={gradientString} total={total} />
      </div>
      <div className="relative -top-80 flex justify-center">
        <CategoryDescription />
      </div>
    </div>
  );
}
