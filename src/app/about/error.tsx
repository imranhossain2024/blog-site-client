"use client";

import { useEffect } from "react";

export default function AboutError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    //we can pass this error to a logger
    console.error(error);
  }, []);
  return (
    <div>            
      <h1>Something Went wrong, please try again.</h1>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}
