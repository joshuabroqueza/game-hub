import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import CanceledError from "axios";

interface Platform {
  id: number;
  name: string;
}

interface FetchPlatformResponse {
  count: number;
  results: Platform[];
}

const usePlatfrom = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchPlatformResponse>("/platforms", { signal: controller.signal })
      .then((response) => {
        setPlatforms(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { platforms, error, isLoading };
};

export default usePlatfrom;
