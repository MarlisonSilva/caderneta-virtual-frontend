/**
 * Faz uma requisição para a api.
 *
 * @async
 * @param {string} path - Endpoint da api (ex: login/check)
 * @param {string} method - Método da requisição (ex: POST)
 * @param {object} headers - Headers da requisição.O
 * @param {object} body - Campos a serem enviados no body.
 * @throws {Error} - Caso codigo sera diferente de 2xx, erro.
 * @returns {Promise<any>}
 */
export async function fetchAPI(
  path: string,
  method: string,
  headers: object = {},
  body: object = {},
): Promise<any> {
  const apiURL = "http://localhost:8000/api";
  let response: any;
  if (method.toLowerCase() == "get") {
    const params = new URLSearchParams(
      Object.entries(body).reduce(
        (acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        },
        {} as Record<string, string>,
      ),
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
    // Erro se a resposta não for um status 2xx
    throw new Error(`Erro: ${response.status} - ${response.statusText}`);
  }

  if ((response.headers.get("Content-Type") || "") == "application/json")
    return await response.json();
}
