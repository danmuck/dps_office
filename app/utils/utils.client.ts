import { API_BASE } from "../types/config";

// client fetch for JSON‐returning, JWT‐protected endpoints
// This is used in client components where cookies are not available
// and we need to send the JWT in the headers instead of cookies.
// //
export async function clientFetch<T>(
  bucket: string,
  route: string,
  method: "GET"|"POST"|"PUT"|"DELETE" = "GET",
  body?: any
): Promise<T> {
  const path = route ? `${bucket}/${route}` : bucket;
  const res = await fetch(`${API_BASE}/${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: body != null ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}