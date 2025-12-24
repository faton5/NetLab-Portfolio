import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://your-portfolio.com",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
});
