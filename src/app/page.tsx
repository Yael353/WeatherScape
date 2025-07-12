"use client";
import WeatherCard from "@/components/WeatherCard";
import useWeather from "@/hooks/useWeather";
import { useState } from "react";

export default function Home() {
  const [coords] = useState({ lat: "59.33", lon: "18.07" });
  const { weather, loading } = useWeather(coords);

  const defaultWeather = {
    current_weather: {
      temperature: 0,
      weathercode: 0,
      windspeed: 0,
    },
    city: "Stockholm", // Lägg till city här
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        WeatherScape
      </h1>

      {loading ? (
        <p>Laddar väderdata...</p>
      ) : (
        <WeatherCard data={weather || defaultWeather} />
      )}
    </main>
  );
}
