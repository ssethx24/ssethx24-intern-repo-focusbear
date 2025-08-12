import React, { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(true);

  // Runs on mount & unmount
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // Fetch data when button clicked
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err));
  };

  // Example of cleanup: logging and resetting state
  useEffect(() => {
    if (data) {
      console.log("Fetched data:", data);
    }
    return () => {
      console.log("Cleaning up after data change");
    };
  }, [data]);

  return (
    <div style={{ border: "1px solid gray", padding: "1rem", marginTop: "1rem" }}>
      <h2>useEffect Demo</h2>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Component" : "Show Component"}
      </button>

      <button onClick={fetchData} style={{ marginLeft: "1rem" }}>
        Fetch Data
      </button>

      {data && (
        <pre style={{ marginTop: "1rem" }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
