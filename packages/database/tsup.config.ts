import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  external: [
    // ... other externals
    "@prisma/client",
    ".prisma/client",
    "generated/client",
  ],
  // Or specifically for dts handling
  dts: {
    // You might need to adjust these options
    resolve: true,
  },
  entry: ["src/index.ts"],
  format: ["esm"],
  sourcemap: true,
  clean: true,
  ...options,
}));
