import { useEffect, useState } from "react";

interface IData {
  id: string;
  name: string;
  phone: string;
  gender: string;
  address: string;
  desc: string;
}

export const useApiFetch = () => {
  const [data, setData] = useState<IData[]>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      try {
        const req = await window.fetch("/api/lists/");
        const result = await req.json();
        setData(result.data);
      } catch (error) {
        console.log("error happen", error);
      } finally {
        setLoading(false);
      }
    };
    get();
  }, []);

  return {
    data,
    isLoading,
  };
};
