"use client";

import { MapPin, Sun } from "lucide-react";

interface WeatherData {
  current_weather: {
    temperature: number;
    weathercode: number;
    windspeed: number;
  };
  city: string;
}

export default function WeatherCard({ data }: { data: WeatherData }) {
  const getWeatherIcon = (code: number) => {
    if (code < 1) return "☀️";
    if (code < 3) return "⛅";
    if (code < 50) return "☁️";
    return "🌧️";
  };

  const getWeatherDescription = (code: number) => {
    if (code < 1) return "Klart";
    if (code < 3) return "Delvis molnigt";
    if (code < 50) return "Molnigt";
    return "Regnigt";
  };

  return (
    <div className="bg-white/90 p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
        <MapPin className="w-5 h-5 mr-2" />
        {data.city}
      </h2>
      <div className="mt-4 flex items-center">
        <span className="text-5xl font-light">
          {data.current_weather.temperature}°C
        </span>
        <div className="ml-4">
          <p className="text-gray-600">
            {getWeatherDescription(data.current_weather.weathercode)}{" "}
            <Sun className="inline ml-1 mb-1 text-amber-300" />
          </p>
          <p className="text-sm text-gray-500">
            Vind: {data.current_weather.windspeed} m/s
          </p>
        </div>
      </div>
    </div>
  );
}
