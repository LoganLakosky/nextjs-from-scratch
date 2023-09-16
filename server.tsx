const express = require("express");
const React = require("react");

const { renderToString } = require("react-dom/server");

const app = express();

app.get("/", (req: any, res: any) => {
  const appString = renderToString();
  res.send();
});

app.listen(3000, () => {
  console.log("server is listening on port 3000 ");
});
