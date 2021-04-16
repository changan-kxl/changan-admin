import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";

const { resolve } = require("path");

export default defineConfig({
  resolve: {
    extensions: [".js", ".vue", ".json"], //导入忽略后缀
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "ant-design-vue",
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/css`;
          },
        },
      ],
    }),
  ],
});
