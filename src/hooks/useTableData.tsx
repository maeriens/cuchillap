import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import { supabase } from "../utils/supabase";

const useTableData = <T,>(tableName: string, initialState?: T[]) => {
  const [data, setData] = useState<T[]>(initialState ?? []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<PostgrestError | string>();

  const getData = async () => {
    setLoading(true);
    setError(undefined);
    try {
      const { error, data } = await supabase.from(tableName).select();
      if (error) {
        setError(error);
      } else {
        setData(data);
      }
    } catch (e) {
      let error;
      if (typeof e === "string") {
        error = e.toUpperCase();
      } else if (e instanceof Error) {
        error = e.message;
      }
      console.error(error);
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading, error, getData };
};

export default useTableData;
