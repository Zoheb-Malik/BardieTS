import { defineConfig } from "tsup";
 
export default defineConfig({
    format: ["cjs", "esm"],
    entry: ["./src/lib/bardie-ts.ts"],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true
});
