export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        WeatherScape
      </h1>

      {/*platshållare för väderkomponent */}
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-lg">
        <p>
          Väderdata kommer här...
        </p>
      </div>
    </main>
  );
}
