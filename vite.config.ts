/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["**/src/**/*.spec.ts"],
    coverage: {
      include: ["**/src/**/*.ts"],
      exclude: ["**/src/index.ts", "**/src/**/*.spec.ts"],
    },
  },
});
