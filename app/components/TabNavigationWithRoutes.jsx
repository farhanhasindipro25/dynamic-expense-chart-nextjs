"use client";
const tabs = [
  {
    name: "1M",
    href: "/1M",
  },
  {
    name: "6M",
    href: "/6M",
  },
  {
    name: "1Y",
    href: "/1Y",
  },
  {
    name: "ALL TIME",
    href: "/all-time",
  },
];

export default function TabNavigationWithRoutes() {
  return (
    <nav
      className="flex items-center gap-6 bg-gray-100 rounded-full px-10 py-6 cursor-pointer"
      onClick={console.log("click")}
    >
      {tabs.map((tab) => (
        <div key={tab.name} className="cursor-pointer">
          {tab.name}
        </div>
      ))}
    </nav>
  );
}
