### Dynamic Expense Chart

### Live Link: https://dynamic-expense-chart.vercel.app/

# Project Description:
- A dynamic pie chart is generated using vanilla Tailwind CSS's conic gradient property without the use of any Javascript libraries to generate the pie chart.
- A dynamic filtering of time periods. When clicking on a time period, the pie chart shows the dynamic data, where each segment (category) occupies a certain percentage in the pie chart and the total expenses are shown on the middle.
- Utility functions are maintained to do all necessary calculations.
- Reusable components are maintained throughout the project.
- Errors of empty states are handled. e.g. If a value is not passed, etc, then the total value will show 0 instead of breaking.
- For filtering the dynamic pie chart according to the time periods, the various calculated values as per the time periods are passed into one common reusable chart component.
- The chart is dynamically rendered based on the current/active tab that the user has currently clicked/selected.

# Tools Used
**Frameworks**
1. NextJS - A ReactJS framework
2. TailwindCSS - A utility first CSS framework

**Libraries and Packages**
1. Tailwind Merge - A utility function to efficiently merge Tailwind CSS classes in Javascript without conflicts in styling.
2. clsx - A tiny utility for constructing className in JSX conditionally. It is also a better and faster replacement for the classnames module given by NextJS
3. Class Variance Authority(cva) - A library to manage variants of UI components efficiently