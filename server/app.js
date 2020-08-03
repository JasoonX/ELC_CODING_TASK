const express = require("express");
var cors = require("cors");

const app = express();
const data = require("./data");

app.use(cors());

app.get("/search/:value?", (request, response) => {
  response.json({ data: getSearchResults(request.params.value) });
});

const getSearchResults = (searchedValue = "") => {
  return data.filter(
    (value) =>
      value.name.toLowerCase().includes(searchedValue.toLowerCase()) ||
      value.tags.includes(searchedValue.toLowerCase())
  );
};

app.listen(3035);
