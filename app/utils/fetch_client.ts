import { API_BASE } from "../types/config";

// client fetch for JSON‐returning, JWT‐protected endpoints
// This is used in client components where cookies are not available
// and we need to send the JWT in the headers instead of cookies.
// //
export async function clientFetch<T>(
  endpoint: string,
  rel_path: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
  body?: any,
  options?: RequestInit
): Promise<T> {
  const path = rel_path ? `${endpoint}/${rel_path}` : endpoint;
  const res = await fetch(`${API_BASE}/${path}`, {
    method,
    headers: { "Content-Type": "application/json", ...(options?.headers || {}) },
    cache: options?.cache || "no-store",
    credentials: "include",
    body: body != null ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}