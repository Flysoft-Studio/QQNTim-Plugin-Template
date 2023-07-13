import { build } from "esbuild";
import * as fs from "fs-extra";
import * as path from "path";

const s = path.sep;

const isProduction = process.env["NODE_ENV"] == "production";

async function buildPlugin() {
    await fs.ensureDir("dist");
    await build({
        target: "node18",
        bundle: true,
        platform: "node",
        write: true,
        allowOverwrite: true,
        sourcemap: isProduction ? false : "inline",
        minify: isProduction,
        treeShaking: isProduction,
        format: "cjs",
        entryPoints: [`src${s}main.ts`, `src${s}renderer.ts`],
        outdir: "dist",
        external: ["electron", "@flysoftbeta/qqntim-typings"],
    });
    await fs.copy("publish", "dist");
}

buildPlugin();
