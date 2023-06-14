const path = require("path");
module.exports = {
  webpack: {
    alias: {
      app: path.resolve(__dirname, "src/app"),
      map: path.resolve(__dirname, "src/features/map"),
      menu: path.resolve(__dirname, "src/features/menu"),
      overlays: path.resolve(__dirname, "src/features/ui-overlays"),
    },
  },
};
