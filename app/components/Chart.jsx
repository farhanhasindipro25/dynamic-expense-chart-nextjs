export default function Chart({ data, gradientString }) {
  return (
    <div class="flex items-center justify-center rounded-full h-screen">
      <div class="relative w-96 h-96 rounded-full">
        <div
          class="absolute w-full rounded-full h-full"
          style={{
            background: gradientString,
          }}
        ></div>
      </div>
      <div className="absolute w-72 h-72 rounded-full bg-white">
        <div className="relative left-10 -bottom-28">
          <h2 className="text-6xl font-bold">$ 4343</h2>
        </div>
      </div>
    </div>
  );
}
