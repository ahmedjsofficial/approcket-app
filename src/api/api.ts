import { apiConfig } from "@/config/api.config";
import { FooterQuery, homePageQuery, NavbarQuery } from "@/lib/query";

export async function getData(query: string, options: RequestInit = {}) {
  let endpoint: string;
  let searchQuery: string;

  switch (query) {
    case 'home':
      endpoint = apiConfig.endpoints.home;
      searchQuery = homePageQuery;
      break;
    case 'footer':
      endpoint = apiConfig.endpoints.footer;
      searchQuery = FooterQuery;
      break;
    case 'navbar':
      endpoint = apiConfig.endpoints.navbar;
      searchQuery = NavbarQuery;
      break;
    default:
      throw new Error(`Unknown query type: ${query}`);
  }

  const url = new URL(`/api${endpoint}`, apiConfig.baseUrl);
  url.search = searchQuery;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
