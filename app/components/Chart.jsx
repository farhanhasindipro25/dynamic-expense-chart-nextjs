export default function Chart({ gradientString, total }) {
  return (
    <div class="flex items-center justify-center rounded-full h-screen">
      <div class="w-96 h-96 rounded-full">
        <div
          class="w-full rounded-full h-full"
          style={{
            background: gradientString,
          }}
        ></div>
      </div>
      <div className="absolute w-72 h-72 rounded-full bg-white">
        <div className="relative left-10 -bottom-28">
          <h2 className="text-6xl font-bold">
            $ {total}
            <span className="text-2xl font-bold text-tertiary">.00</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
