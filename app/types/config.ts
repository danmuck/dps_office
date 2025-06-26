

export const API_URL = process.env.DOMAIN || "http://192.168.50.125:8080";
console.log(`API_URL is set to: ${API_URL}`);
if (API_URL === "http://localhost:8080") {
  console.warn(
    "API_URL is set to localhost. This is fine for local development, but make sure to set it to your production domain in production!"
  );
}
export const API_VERSION = "v2";
export const API_BASE = `${API_URL}/api/${API_VERSION}`;
