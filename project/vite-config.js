import { defineConfig } from "vite";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { importAssertionsPlugin } from "rollup-plugin-import-assert";
import { importAssertions } from "acorn-import-assertions";
const { fileURLToPath } = require("url");

// export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {

// });

export default defineConfig(
  ({ command, mode, isSsrBuild, isPreview }) => {
    console.log(mode);
    if (command === "serve" || command === "build") {
      console.log("executing image json generation");
      require("child_process").exec(
        "bash ./src/resources/imageMetaGenerator > ./src/resources/image.json"
      );
      return {
        // dev specific config
      };
    } else {
      // command === 'build'
      console.log("bash build command");
      return {
        // build specific config
      };
    }
  },
  {
    // plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        "/src/": fileURLToPath(new URL("./src/./././", import.meta.url)),
      },
    },
    build: {
      // outDir: Config.modulesDirRelativePath + "/vue-project",
    },
    base: "./",
  },
  {
    plugins: [
      {
        name: "prebuild-commands",
        handleHotUpdate: async () => {
          console.log("test");
        },
        buildStart: async () => {
          console.log("test");
        },
      },
    ],
  }
);

module.exports = {
  root: "./",
  build: {
    outDir: "../../lhuith.github.io/",
  },
};

// export default {
// acornInjectPlugins: [importAssertions],
// plugins: [viteCommonjs(), cssInjectedByJsPlugin(), importAssertionsPlugin()],
// };
