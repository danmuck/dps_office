import { API_BASE } from "../types/config";


export type Response<T> = {
	message?: string;
	error?: string;
	data: T;
};

export class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError";
  }
}

export async function clientFetch<T>(
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