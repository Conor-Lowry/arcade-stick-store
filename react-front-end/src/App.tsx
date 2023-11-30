import { useState } from "react";
import "./App.css";
import { pingServer } from "./api/TestAPI.ts";

function App() {
  const [pingResponseData, setPingResponseData] = useState("");

  function PingResponse() {
    return pingResponseData ? (
      <p>Response from Server: {pingResponseData}</p>
    ) : null;
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Test ping result from back end</h1>
      <button
        onClick={async () => setPingResponseData((await pingServer()).value)}
      >
        Ping Server
      </button>
      <PingResponse></PingResponse>
    </>
  );
}

export default App;
