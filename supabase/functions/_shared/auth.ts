import { timingSafeEqual } from "node:crypto";

/**
 * Checks if the request contains a valid API key in query params or Authorization header
 * @param request - The incoming request object
 * @returns boolean indicating if the request is authorized
 */
export function isAuthorized(request: Request): boolean {
  const url = new URL(request.url);
  const token = url.searchParams.get("api_key");

  if (token === null) {
    return false;
  }

  const API_KEY = Deno.env.get("API_KEY");
  if (API_KEY === undefined) {
    return false;
  }

  const encoder = new TextEncoder();
  const tokenBytes = encoder.encode(token);
  const keyBytes = encoder.encode(API_KEY);

  if (tokenBytes.length !== keyBytes.length) {
    return false;
  }

  return timingSafeEqual(tokenBytes, keyBytes);
}
