const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 8080;
const Router = require("./routers/index_router");
// Morgan
app.use(morgan("combined"));
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
Router(app);
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
