import Badge from "./Badge";

export default function CategoryDescription() {
  return (
    <div className="w-full flex flex-col items-center justify-center lg:flex-row lg:justify-evenly gap-6">
      <div className="flex items-center gap-4 w-full">
        <Badge variant="primary" />
        <h2 className="text-gray-500 font-semibold text-base md:text-lg">
          Personal
        </h2>
      </div>
      <div className="flex items-center gap-4 w-full">
        <Badge variant="tertiary" />
        <h2 className="text-gray-500 font-semibold text-base md:text-lg">
          Shopping
        </h2>
      </div>
      <div className="flex items-center gap-4 w-full">
        <Badge variant="accent" />
        <h2 className="text-gray-500 font-semibold text-base md:text-lg">
          Phone
        </h2>
      </div>
      <div className="flex items-center gap-4 w-full">
        <Badge variant="secondary" />
        <h2 className="text-gray-500 font-semibold text-base md:text-lg">
          Other
        </h2>
      </div>
    </div>
  );
}
