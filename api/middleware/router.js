const flightRoutes = require("../api/routes");

module.exports = (app) => {
  app.use("/api", flightRoutes);
}