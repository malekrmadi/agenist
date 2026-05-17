/** URL publique du site — définir VITE_SITE_URL dans .env en production */
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") || "https://genist.fr";
