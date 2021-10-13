const home = require("./home");
const Router = (app) => {
  app.use("/", home);
};
module.exports = Router;
