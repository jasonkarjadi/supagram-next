import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import supabase from "../utils/supabase";

const useStorage = (file: File) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<PostgrestError | Error | null>(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.storage
        .from("new-bucket")
        .upload(file.name, file);

      if (error) {
        console.error(error);
        setError(error);
      } else {
        const {
          data: { publicUrl },
        } = supabase.storage.from("new-bucket").getPublicUrl(data.path);
        setUrl(publicUrl);

        const { error } = await supabase
          .from("images")
          .insert({ url: publicUrl });
        if (error) {
          console.error(error);
          setError(error);
        }
      }
    })();
  }, [file]);

  return { progress, error, url };
};

export default useStorage;

// const updateProgress = (ev: ProgressEvent<EventTarget>) => {
//   if (ev.lengthComputable) {
//     const pct = (ev.loaded / ev.total) * 100;
//     setProgress(pct);
//   }
// };

// const handleTransferComplete = async (ev: ProgressEvent<EventTarget>) => {
//   console.log("The transfer is complete.");
//   const {
//     data: { publicUrl },
//   } = supabase.storage.from("new-bucket").getPublicUrl(file.name);
//   setUrl(publicUrl);
//   const { error } = await supabase.from("images").insert({ url: publicUrl });
//   if (error) {
//     console.error(error);
//     setError(error);
//   }
// };

// const handleTransferFailed = (ev: ProgressEvent<EventTarget>) => {
//   console.error("An error occurred while transferring the file.");
// };

// const req = new XMLHttpRequest();
// req.upload.onprogress = updateProgress;
// req.upload.onload = handleTransferComplete;
// req.upload.onerror = handleTransferFailed;
// req.open(
//   "POST",
//   `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/new-bucket/${file.name}`
// );
// req.send(file);
