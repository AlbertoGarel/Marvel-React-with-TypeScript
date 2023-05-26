import { useState, useEffect } from "react";
import {Result} from '../types/fetchEvents.d';
export default function useFetch(url: string, options: {}) {
  const [result, setResult] = useState<Result[]>();
  const [loading, setloading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const toFetch = async () => {
      try {
        const request_API = await fetch(url, options);
        const json = await request_API.json();
        setResult(json.data.results);
        setloading(false);
      } catch (err) {
        console.log("error", err);
        setError(typeof err === "string" ? err : "error al conectar");
        setloading(false);
      }
    };
    toFetch();
  }, []);

  return {loading, result, error};
}
