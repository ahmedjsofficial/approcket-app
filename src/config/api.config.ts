export const apiConfig = {
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    endpoints: {
        navbar: "/navbar",
        home: "/home-page",
        footer: "/footer"
    }
}