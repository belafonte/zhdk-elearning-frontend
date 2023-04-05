import { requestHandler } from "sveltekit-image/api";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = requestHandler({
  leadingUrl:
    process.env.NODE_ENV === "production"
      ? "https://zhdk-elearning-frontend.netlify.app"
      : "http://127.0.0.1:5173",
  avif: false,
  ttl: 1000 * 60 * 60 * 24 * 7,
  storePath: ".svelte-kit/images"
});
