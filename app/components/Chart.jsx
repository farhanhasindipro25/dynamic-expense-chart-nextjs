export default function Chart({ gradientString, total = 0 }) {
  return (
    <div class="flex items-center justify-center rounded-full">
      <div class="w-52 h-52 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full">
        <div
          class="w-full rounded-full h-full"
          style={{
            background: gradientString,
          }}
        ></div>
      </div>
      <div className="absolute w-32 h-32 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full bg-white">
        <div className="flex items-center justify-center relative left-1 -bottom-12 md:left-1 sm:-bottom-12 md:-bottom-24 lg:-bottom-28">
          <h2 className="text-xl md:text-5xl lg:text-6xl font-bold">
            $ {total}
            {total != 0 ? (
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-tertiary">
                .00
              </span>
            ) : (
              <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-tertiary">
                0.00
              </span>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
}
