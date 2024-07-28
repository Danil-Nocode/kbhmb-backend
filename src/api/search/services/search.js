const client = require("../../../../config/elasticsearch");

async function indexData(type) {
  const entries = await strapi.query(type).findMany();
  const textFields = await getTextFields(type);

  for (const entry of entries) {
    await client.index({
      index: type.split("::").pop(),
      id: entry.id,
      body: entry,
    });
  }
}

async function getTextFields(type) {
  const model = strapi.getModel(type);
  return Object.keys(model.attributes).filter(
    (key) =>
      model.attributes[key].type === "string" ||
      model.attributes[key].type === "text"
  );
}

async function search(query, types) {
  const searchBody = {
    query: {
      multi_match: {
        query,
        fields: await getSearchableFields(types),
        fuzziness: "AUTO",
      },
    },
  };

  const results = await client.search({
    index: types.map((type) => type.split("::").pop()).join(","),
    body: searchBody,
  });

  return results.hits.hits.map((hit) => hit._source); // Возвращаем все поля
}

async function getSearchableFields(types) {
  const fields = new Set();
  for (const type of types) {
    const textFields = await getTextFields(type);
    textFields.forEach((field) => fields.add(field));
  }
  return Array.from(fields);
}

async function deleteData(type, id) {
  try {
    await client.delete({
      index: type.split("::").pop(),
      id,
    });
  } catch (error) {
    console.error(`Failed to delete from Elasticsearch: ${error.message}`);
  }
}

module.exports = {
  indexData,
  search,
  deleteData,
};
