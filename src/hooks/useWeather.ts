"use client";
import { useState, useEffect } from "react";

interface WeatherResponse {
  current_weather: {
    temperature: number;
    weathercode: number;
    windspeed: number;
  };
  city: string;
}

export default function useWeather(coords: { lat: string; lon: string }) {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `/api/weather?lat=${coords.lat}&lon=${coords.lon}`;
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const contentType = res.headers.get("content-type");
        if (!contentType?.includes("application/json")) {
          const text = await res.text();
          throw new Error(
            `Expected JSON but got: ${text.substring(0, 100)}...`
          );
        }

        const data = await res.json();
        setWeather(data);
        setError(null);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error instanceof Error ? error.message : "Unknown error");
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [coords.lat, coords.lon]);

  return { weather, loading, error };
}
