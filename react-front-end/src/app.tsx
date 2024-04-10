import { useState } from "react";
import "./app.css";
import { pingServer } from "./api/TestAPI.ts";
import Footer from "./components/organisms/footer.tsx";
import Header from "./components/organisms/header.tsx";

export default function App() {
  const [pingResponseData, setPingResponseData] = useState("");

  function PingTest() {
    return (
      <>
        <h1 className="text-3xl font-bold">Test ping result from back end</h1>
        <button
          className="border-2 p-2"
          onClick={async () => setPingResponseData((await pingServer()).value)}
        >
          Ping Server
        </button>
        {pingResponseData ? (
          <p>Response from Server: {pingResponseData}</p>
        ) : null}
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="h-80 p-10">
        <PingTest />
      </main>
      <Footer />
    </>
  );
}
