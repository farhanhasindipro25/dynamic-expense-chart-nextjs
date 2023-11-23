"use client";

import { cn } from "../common/helpers/UtilsKit";

const DEFAULT_STYLES =
  "flex justify-center items-center cursor-pointer text-base truncate px-2";
const ACTIVE_TAB_STYLES =
  "font-semibold rounded-full text-primary bg-white p-2 sm:p-3";
const DEFAULT_TAB_STYLES = "font-medium text-gray-500";

export default function TabNavigation({ tabs, current, setTab }) {
  return (
    <ul className="flex w-fit justify-center sm:py-2 p-2 sm:px-6 rounded-full gap-4 md:gap-8 bg-gray-100">
      {tabs?.map((tab) => (
        <li
          key={tab.name}
          className={cn(
            DEFAULT_STYLES,
            tab.key === current ? ACTIVE_TAB_STYLES : DEFAULT_TAB_STYLES
          )}
          onClick={() => setTab(tab.key)}
        >
          {tab.name}
        </li>
      ))}
    </ul>
  );
}
