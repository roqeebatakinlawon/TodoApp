import React from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function MyErrorBoundary({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>Something went wrong!</h1>
      <h2>Encountered a cosmic dust bunny! We're on it.</h2>
      <pre></pre>
      <button>Try again</button>
    </div>
  );
}
