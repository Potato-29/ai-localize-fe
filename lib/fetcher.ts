import { parseCookies } from "nookies";

interface FetcherOptions {
  auth?: boolean;
  headers?: HeadersInit;
  method?: string;
  body?: object;
  baseUrl?: string;
}

export async function fetcher(
  url: string,
  options: FetcherOptions = {}
): Promise<Response> {
  const {
    auth,
    headers = {},
    baseUrl = "",
    method = "GET",
    body,
    ...restOptions
  } = options;

  const fullUrl = baseUrl ? `${baseUrl}${url}` : url;
  const cookies = parseCookies();
  const token = cookies.token;
  return fetch(fullUrl, {
    body: body ? JSON.stringify(body) : null,
    method,
    headers: {
      ...headers,
      ...(auth === false ? {} : { Authorization: `Bearer ${token}` }),
      "Content-Type": "application/json",
    },
    ...restOptions,
  });
}
