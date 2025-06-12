interface FetchAPIOptions {
  path: string;
  method: string;
  headers?: Record<string, string>;
  body?: Record<string, unknown>;
}

export async function fetchAPI<T = unknown>({
  path,
  method,
  headers = {},
  body = {},
}: FetchAPIOptions): Promise<T> {
  const apiURL = process.env.NEXT_PUBLIC_CVV_API_URL || "http://localhost:8000/api";
  let response: Response;

  if (method.toLowerCase() === "get") {
    const params = new URLSearchParams(
      Object.entries(body).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {} as Record<string, string>),
    );

    response = await fetch(
      `${apiURL}${path}${params.size > 0 ? "?" + params.toString() : ""}`,
      {
        method: method.toUpperCase(),
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      },
    );
  } else {
    response = await fetch(`${apiURL}${path}`, {
      method: method.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    });
  }

  if (!response.ok) {
    throw new Error(`Erro: ${response.status} - ${response.statusText}`);
  }

  const contentType = response.headers.get("Content-Type") || "";
  if (contentType.includes("application/json")) {
    return response.json() as Promise<T>;
  }

  return {} as T;
}
