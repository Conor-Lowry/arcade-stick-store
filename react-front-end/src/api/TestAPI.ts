export async function pingServer() {
  const url = "http://localhost:8080/ping";

  return fetch(url, {
    // Override this request header to prevent CORS errors
    headers: { "Access-Control-Request-Headers": "Content-Type" },
  }).then((response) => response.json() as Promise<{ value: string }>);
}
