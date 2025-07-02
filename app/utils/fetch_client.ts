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


export class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError";
  }
}

export async function clientFetchNEW<T>(
  path: string,
  {
    method = "GET",
    body,
    query,
    headers = {},
    cache = "no-store",
    credentials = "include",
  }: {
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: any;
    query?: Record<string, string | number | boolean>;
    headers?: HeadersInit;
    cache?: RequestCache;
    credentials?: RequestCredentials;
  } = {}
): Promise<T> {
  const url = new URL(`${API_BASE}/${path}`);
  if (query) {
    Object.entries(query).forEach(([key, value]) =>
      url.searchParams.set(key, String(value))
    );
  }

  const res = await fetch(url.toString(), {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    credentials,
    cache,
    body: body != null ? JSON.stringify(body) : undefined,
  });

  console.info(`[clientFetchT] [${method}] ${url.pathname}${url.search} → ${res.status}`);

  const text = await res.text(); // read once

  if (!res.ok) {
    try {
      const errorJson = JSON.parse(text);
      throw new Error(errorJson?.error || `Request failed with status ${res.status}`);
    } catch {
      throw new Error(text);
    }
  }

  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Failed to parse response JSON");
  }
}