// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://ymorzincupfinal.com",
	integrations: [react()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Alfa Slab One",
			cssVariable: "--font-alfa-slab-one",
		},
	],
});
