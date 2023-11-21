export default function Chart({ gradientString, total }) {
  return (
    <div class="flex items-center justify-center rounded-full h-screen">
      <div class="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full">
        <div
          class="w-full rounded-full h-full"
          style={{
            background: gradientString,
          }}
        ></div>
      </div>
      <div className="absolute w-44 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full bg-white">
        <div className="relative left-6 -bottom-16 md:left-10 sm:-bottom-16 md:-bottom-24 lg:-bottom-28">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            $ {total}
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-tertiary">
              .00
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
