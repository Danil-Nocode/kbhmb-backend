const { indexData, deleteData } = require("./search/services/search");

module.exports = (modelName) => {
  return {
    async afterCreate(event) {
      await indexData(modelName);
    },
    async afterUpdate(event) {
      await indexData(modelName);
    },
    async afterDelete(event) {
      const { result } = event;
      await deleteData(modelName, result.id);
    },
  };
};
