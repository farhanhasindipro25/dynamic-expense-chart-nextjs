import Badge from "./Badge";

export default function CategoryDescription() {
  return (
    <div className="w-full flex gap-6 flex-wrap justify-evenly">
      <div className="flex items-center gap-3">
        <Badge variant="primary" />
        <h2 className="text-gray-500 font-semibold text-lg">Personal</h2>
      </div>
      <div className="flex items-center gap-3">
        <Badge variant="tertiary" />
        <h2 className="text-gray-500 font-semibold text-lg">Shopping</h2>
      </div>
      <div className="flex items-center gap-3">
        <Badge variant="accent" />
        <h2 className="text-gray-500 font-semibold text-lg">Phone</h2>
      </div>
      <div className="flex items-center gap-3">
        <Badge variant="secondary" />
        <h2 className="text-gray-500 font-semibold text-lg">Other</h2>
      </div>
    </div>
  );
}
