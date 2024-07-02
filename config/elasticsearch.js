const { Client } = require("@elastic/elasticsearch");

const client = new Client({
  node: "http://localhost:9200",
  auth: {
    username: "elastic",
    password: "4MSnQ46WNQz+aKD56JpH",
  },
});

module.exports = client;
