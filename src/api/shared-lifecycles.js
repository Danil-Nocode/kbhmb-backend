const { indexData } = require('./search/services/search');

module.exports = (modelName) => {
  return {
    async afterCreate(event) {
      await indexData(modelName);
    },
    async afterUpdate(event) {
      await indexData(modelName);
    },
    async afterDelete(event) {
      await indexData(modelName);
    },
  };
};
