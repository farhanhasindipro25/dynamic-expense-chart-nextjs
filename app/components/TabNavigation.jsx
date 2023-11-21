"use client";

import { cn } from "../common/helpers/UtilsKit";

const DEFAULT_STYLES =
  "flex justify-center items-center cursor-pointer text-base truncate px-2";
const ACTIVE_TAB_STYLES =
  "font-semibold text-primary-600 rounded-t-md border-b-2 border-primary-600 px-2 pb-2";
const DEFAULT_TAB_STYLES = "font-normal text-neutral-500 pb-2";
const SELECT_FIELD_STYLES =
  "appearance-none block w-full text-sm rounded-md text-neutral-500 border border-neutral-300 px-3 py-3 placeholder-neutral-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 active:border-primary-500 cursor-text";

export default function TabNavigation({ tabs, current, setTab }) {
  return (
    <ul className="flex w-full gap-8 border-b border-neutral-300">
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
