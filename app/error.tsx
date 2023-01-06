"use client";

import { FC, useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const RootError: FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
};

export default RootError;
