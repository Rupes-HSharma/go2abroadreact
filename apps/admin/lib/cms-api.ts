export const API_BASE = (
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"
).replace(/\/$/, "");
export const WEBSITE_BASE = (
  process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:3000"
).replace(/\/$/, "");
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
  }
}
let refresh: Promise<boolean> | undefined;
async function refreshSession() {
  const refreshToken = localStorage.getItem("admin_refresh_token");
  if (!refreshToken) return false;
  try {
    const res = await fetch(API_BASE + "/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });
    if (!res.ok) return false;
    const value = await res.json();
    localStorage.setItem("admin_access_token", value.accessToken);
    localStorage.setItem("admin_refresh_token", value.refreshToken);
    return true;
  } catch {
    return false;
  }
}
export async function cmsApi<T>(
  path: string,
  options: RequestInit = {},
  retry = true,
): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set(
    "Authorization",
    "Bearer " + (localStorage.getItem("admin_access_token") || ""),
  );
  if (options.body && !(options.body instanceof FormData))
    headers.set("Content-Type", "application/json");
  let res: Response;
  try {
    res = await fetch(API_BASE + path, { ...options, headers });
  } catch {
    throw new ApiError(
      "Cannot reach the API. Check that the backend is running.",
      0,
    );
  }
  if (res.status === 401 && retry) {
    refresh ??= refreshSession().finally(() => {
      refresh = undefined;
    });
    if (await refresh) return cmsApi(path, options, false);
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok)
    throw new ApiError(
      Array.isArray(data.message)
        ? data.message.join("; ")
        : data.message || "Request failed.",
      res.status,
    );
  return data as T;
}
export function messageOf(error: unknown) {
  return error instanceof Error
    ? error.message
    : "Something went wrong. Please try again.";
}
export async function signOut() {
  const refreshToken = localStorage.getItem("admin_refresh_token");
  if (refreshToken)
    await cmsApi("/auth/logout", {
      method: "POST",
      body: JSON.stringify({ refreshToken }),
    }).catch(() => undefined);
  localStorage.removeItem("admin_access_token");
  localStorage.removeItem("admin_refresh_token");
  location.assign("/");
}
