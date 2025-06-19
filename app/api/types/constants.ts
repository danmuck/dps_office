

export const API_BASE = process.env.DOMAIN || "http://localhost:8080";
if (API_BASE === "http://localhost:8080") {
  console.warn(
    "API_BASE is set to localhost. This is fine for local development, but make sure to set it to your production domain in production!"
  );
}
export const API_VERSION = "v1";
export const API_URL = `${API_BASE}/api/${API_VERSION}`;
