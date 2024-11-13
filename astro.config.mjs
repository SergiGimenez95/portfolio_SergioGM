import { defineConfig } from 'astro/config'; // Importa defineConfig

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Configuración de Astro
  site: 'https://tusitio.com',
  integrations: [tailwind()],
  // Otras configuraciones
});