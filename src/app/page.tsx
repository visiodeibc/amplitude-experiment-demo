import Game from "./game";

// eslint-disable-next-line @next/next/no-async-client-component
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-center  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <h1 className="text-4xl font-bold text-emerald-700">THAO vs MANABU</h1>
        <h3 className="text-2xl">Match of the century</h3>
        <h3 className="text-2xl">Who will be your experiment master?!?!</h3>
        <Game />
      </main>
    </div>
  );
}
