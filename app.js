const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/users");
const { client } = require("./db/index");
const homeView = require("./views/home")
app.use(require("morgan")("dev"));
app.use(express.urlencoded({extended: false}));
app.use(require("method-override")("_method"));

app.use("/assets" ,express.static(path.join(__dirname, "public")));

// Routes
app.use("/users", routes);


app.get("/", (req, res, next) => {
  res.send(homeView())
});

// establish db connection and server port
const init = async() => {
  try {
    await client.connect()
    app.listen(process.env.PORT || 3000, () => console.log("listening"));

  } catch (error) {
    console.log(error)
  }
}

init()
