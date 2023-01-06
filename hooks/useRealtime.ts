import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

const useRealtime = (channelName: string) => {
  const [rows, setRows] = useState<{ [key: string]: any }[]>([]);

  useEffect(() => {
    const [schema, table] = channelName.split(":");
    (async () => {
      const { data, error } = await supabase
        .from(table)
        .select()
        .order("created_at", { ascending: false });
      if (error) console.error(error);
      else setRows(data);
    })();
    const channel = supabase
      .channel(channelName)
      .on("postgres_changes", { event: "INSERT", schema, table }, (payload) => {
        console.log(payload);
        setRows([payload.new, ...rows]);
      })
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [channelName]);

  return { rows };
};

export default useRealtime;
