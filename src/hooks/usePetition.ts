import { useEffect, useState } from "react";
import type { Book } from "../types/bookType";
import axios from "axios";

const usePetition = (endpoint: string) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [data, setData] = useState<Book[]>();

  useEffect(() => {
    axios
      .get(`${API_URL}${endpoint}`)
      .then((data) => {
        console.log(data);
        setData(data.data);
      })
      .catch(() => {
        console.error("Failed");
      });
  }, []);

  return data;
};

export default usePetition;
