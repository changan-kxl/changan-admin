const { resolve } = require("path");

const config = {
  resolve: {
    alias: {
      "/@/": resolve(__dirname, "./src"),
    },
  },
};

export default config;
