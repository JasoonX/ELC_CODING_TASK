const express = require("express");
var cors = require("cors");

const app = express();
const data = require("./data");

app.use(cors());

app.get("/search/:value?", (request, response) => {
  response.json({ data: getSearchResults(request.params.value) });
});

const getSearchResults = (searchedValue = "") => {
  const nameValues = [];
  const tagsValues = [];
  data.forEach((value) => {
    if (value.name.toLowerCase().includes(searchedValue.toLowerCase())) {
      nameValues.push(value);
      return;
    }
    if (value.tags.includes(searchedValue.toLowerCase())) {
      tagsValues.push(value);
      return;
    }
  });
  return [...nameValues, ...tagsValues];
};

app.listen(3035);
