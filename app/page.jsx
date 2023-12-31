"use client";
import { useState } from "react";
import getSegmentPercentagePerTotal, {
  CalculatePortionStartingPoints,
  generateConicGradientString,
} from "./common/helpers/UtilsKit";
import CategoryDescription from "./components/CategoryDescription";
import Chart from "./components/Chart";
import TabNavigation from "./components/TabNavigation";

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
  shopping: "#9D9BF4",
  phone: "#4FD18B",
  other: "#141197",
};

const tabs = [
  {
    name: "ALL TIME",
    key: "ALL_TIME",
    href: "/all-time",
    current: true,
  },
  {
    name: "1M",
    key: "1M",
    href: "/1M",
    current: false,
  },
  {
    name: "6M",
    key: "6M",
    href: "/6M",
    current: false,
  },
  {
    name: "1Y",
    key: "1Y",
    href: "/1Y",
    current: false,
  },
];

export default function Home() {
  const { totalOfPeriod: total_1M, percentages: percentages_1M } =
    getSegmentPercentagePerTotal(EXPENSE_DATA, "1M");
  const { totalOfPeriod: total_6M, percentages: percentages_6M } =
    getSegmentPercentagePerTotal(EXPENSE_DATA, "6M");
  const { totalOfPeriod: total_1Y, percentages: percentages_1Y } =
    getSegmentPercentagePerTotal(EXPENSE_DATA, "1Y");
  const { totalOfPeriod: total_All, percentages: percentages_All } =
    getSegmentPercentagePerTotal(EXPENSE_DATA, "ALL TIME");

  const portionStartingPoints_1M =
    CalculatePortionStartingPoints(percentages_1M);
  const portionStartingPoints_6M =
    CalculatePortionStartingPoints(percentages_6M);
  const portionStartingPoints_1Y =
    CalculatePortionStartingPoints(percentages_1Y);
  const portionStartingPoints_All =
    CalculatePortionStartingPoints(percentages_All);

  const gradientString_1M = generateConicGradientString(
    portionStartingPoints_1M,
    PORTION_COLORS
  );
  const gradientString_6M = generateConicGradientString(
    portionStartingPoints_6M,
    PORTION_COLORS
  );
  const gradientString_1Y = generateConicGradientString(
    portionStartingPoints_1Y,
    PORTION_COLORS
  );
  const gradientString_All = generateConicGradientString(
    portionStartingPoints_All,
    PORTION_COLORS
  );
  const [selectedTab, setSelectedTab] = useState(tabs[0].key);

  return (
    <div className="bg-secondary w-full min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-xl text-center md:text-3xl lg:text-5xl font-bold text-white py-10">
          Expense Chart
        </h2>
        <div className="bg-white p-8 rounded-3xl space-y-6">
          <h2 className="text-base text-center md:text-lg lg:text-2xl font-semibold text-gray-700">
            Expenses
          </h2>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center pb-10">
              <TabNavigation
                tabs={tabs}
                current={selectedTab}
                setTab={setSelectedTab}
              />
            </div>
            <div>
              {selectedTab === "ALL_TIME" ? (
                <Chart
                  data={EXPENSE_DATA}
                  gradientString={gradientString_All}
                  total={total_All}
                />
              ) : null}
              {selectedTab === "1M" ? (
                <Chart
                  data={EXPENSE_DATA}
                  gradientString={gradientString_1M}
                  total={total_1M}
                />
              ) : null}
              {selectedTab === "6M" ? (
                <Chart
                  data={EXPENSE_DATA}
                  gradientString={gradientString_6M}
                  total={total_6M}
                />
              ) : null}
              {selectedTab === "1Y" ? (
                <Chart
                  data={EXPENSE_DATA}
                  gradientString={gradientString_1Y}
                  total={total_1Y}
                />
              ) : null}
            </div>
            <div className="mx-auto py-10">
              <CategoryDescription />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
