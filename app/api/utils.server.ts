import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { API_BASE } from "./types/constants";

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 300;

/**
 * Fetch a JSON‐returning, JWT‐protected endpoint.
 * This is a typed wrapper around `apiRequest` that automatically JSON.stringifies the body,
 * parses the JSON response, and returns it as the given type `T`.
 * 
 * @param rel_path - The relative path segment, e.g. "users"
 * @param endpoint - A sub-path like "dirtpig" or empty string to use only rel_path
 * @param method - HTTP method (GET, POST, PUT, PATCH, DELETE)
 * @param body - Optional body object to be JSON.stringified
 * @returns Parsed JSON response cast to the given type `T`
 * @throws Redirects on 401, or throws an error on any other failed response
 *
 * @example
 * // Fetch a single user
 * const user = await apiFetch<UserProfile>("users", "dirtpig");
 * console.log(user.name);
 * 
 * @example
 * // Create a new user
 * const created = await apiFetch<UserProfile>("users", "", "POST", { username: "newuser" });
 * console.log("Created user:", created);
 * 
 * @example
 * // Fetch all users
 * const users = await apiFetch<UserProfile[]>("users", "");
 * users.forEach(u => console.log(u.id, u.name));
 */
export async function apiFetch<T>(
  rel_path: string,
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
  body?: any
): Promise<T> {
  const res = await apiRequest(rel_path, endpoint, method, body);
  return (await res.json()) as T;
}

/**
 * Makes a JWT-authenticated API request to your backend.
 * Automatically includes cookies, builds headers, logs the request, and retries on failure.
 * 
 * @param rel_path - Path like "users"
 * @param endpoint - Subpath like "dirtpig" or empty string
 * @param method - HTTP method
 * @param body - Optional body object
 * @returns Raw `Response` object
 * @throws Redirects on 401 or throws an error for other HTTP errors
 * 
 * @example
 * const res = await apiRequest("users", "dirtpig");
 * const json = await res.json();
 */
export async function apiRequest(
  rel_path: string,
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
  body?: any
): Promise<Response> {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value.trim() ?? "";
  const path = endpoint ? `${rel_path}/${endpoint}` : rel_path;
  const url = `${API_BASE}/${path}`;
  const headers = new Headers({ "Content-Type": "application/json" });
  if (token) headers.set("cookie", `jwt=${token}`);

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(url, {
        method,
        headers,
        cache: "no-store",
        credentials: "include",
        body: body != null ? JSON.stringify(body) : undefined,
      });

      console.info(`[apiRequest] [${method}] ${url} → ${res.status}`);

      if (res.status === 401) {
        console.warn(`[apiRequest] Unauthorized. Redirecting to home.`);
        redirect("/");
      }

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`API error ${res.status}: ${text}`);
      }

      return res;
    } catch (err) {
      console.error(`[apiRequest] Attempt ${attempt} failed:`, err);
      if (attempt === MAX_RETRIES) throw err;
      await new Promise((res) => setTimeout(res, RETRY_DELAY_MS));
    }
  }

  throw new Error("Unreachable code: API retries exceeded");
}

interface CookieOptions {
  path?: string;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: "lax" | "strict" | "none";
}

const DEFAULT_OPTS: CookieOptions = {
  path: "/",
  httpOnly: true,
  secure: true,
  sameSite: "lax",
};

/**
 * Extract and set cookies from a `Response.headers` object.
 * Only the listed cookie names will be applied.
 *
 * @param headers `res.headers` from a fetch() call
 * @param cookieNames List of cookie names to extract and apply
 * @param options Cookie settings to apply (default: secure, httponly, etc.)
 */
export async function setCookiesFromResponseHeaders(
  headers: Headers,
  cookieNames: string[],
  options: CookieOptions = DEFAULT_OPTS
) {
  const header = headers.get("set-cookie");
  if (!header) return;

  const store = await cookies();

  const parts = header.includes(", ") ? header.split(/,(?=\s*\w+=)/) : [header];

  for (const name of cookieNames) {
    const match = parts.find((chunk) => chunk.trim().startsWith(`${name}=`));
    if (!match) continue;

    const value = match.split(";")[0]?.split("=")[1];
    if (value) {
      store.set(name, decodeURIComponent(value), options);
    }
  }
}