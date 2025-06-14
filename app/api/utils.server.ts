import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { API_BASE } from "./types/constants";

/**
 * Fetch a JSON‐returning, JWT‐protected endpoint.
 * @param bucket  e.g. "users"
 * @param route   e.g. "dirtpig" or "" for the root of the bucket
 * @param method  HTTP method
 * @param body    Optional body (will be JSON.stringified)
 */
export async function apiFetch<T>(
    bucket: string,
    route: string,
    method: "GET"|"POST"|"PUT"|"PATCH"|"DELETE" = "GET",
    body?: any
  ): Promise<T> {
    const res = await apiRequest(bucket, route, method, body);
    return (await res.json()) as T;
  }

export async function apiRequest(
  bucket: string,
  route: string,
  method: "GET"|"POST"|"PUT"|"PATCH"|"DELETE" = "GET",
  body?: any
): Promise<Response> {
  // read the cookie
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value.trim() ?? "";

  // build url && headers
  const path = route ? `${bucket}/${route}` : bucket;
  const url  = `${API_BASE}/${path}`;
  const headers = new Headers({ "Content-Type":"application/json" });
  if (token) headers.set("cookie", `jwt=${token}`);

  // do the fetch
  const res = await fetch(url, {
    method,
    headers,
    cache: "no-store",
    credentials: "include",
    body: body != null ? JSON.stringify(body) : undefined,
  });

  // handle auth failure
  if (res.status === 401) redirect("/");

  if (!res.ok && res.status !== 401) {
    throw new Error(`API error ${res.status}: ${await res.text()}`);
  }

  return res;
}