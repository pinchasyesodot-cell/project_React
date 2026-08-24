import { useEffect, useState } from "react";
import { api } from "../api/axios";
import axios from "axios";
export const useFetch = <T>(
  url: string,
): {
  data: T | null;
  error: string | null;
  isLoading: boolean;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const respons = await api.get<T>(url);
        setData(respons.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data.message || error.message);
        } else if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, error, isLoading };
};
