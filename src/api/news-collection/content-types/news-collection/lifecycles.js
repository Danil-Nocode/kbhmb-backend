const sharedLifecycles = require("../../../shared-lifecycles");
const { getSingleTypeField } = require("../../../../utils/content-types");

async function addParentSlug(event) {
  const parentSlug = await getSingleTypeField(
    "api::news-page.news-page",
    "slug"
  );

  if (parentSlug) {
    event.params.data.parentSlug = parentSlug;
  }
}

module.exports = {
  async beforeCreate(event) {
    await addParentSlug(event);
  },

  async beforeUpdate(event) {
    await addParentSlug(event);
  },

  async afterCreate(event) {
    if (sharedLifecycles("api::news-collection.news-collection").afterCreate) {
      await sharedLifecycles(
        "api::news-collection.news-collection"
      ).afterCreate(event);
    }
  },

  async afterUpdate(event) {
    if (sharedLifecycles("api::news-collection.news-collection").afterUpdate) {
      await sharedLifecycles(
        "api::news-collection.news-collection"
      ).afterUpdate(event);
    }
  },

  async afterDelete(event) {
    if (sharedLifecycles("api::news-collection.news-collection").afterDelete) {
      await sharedLifecycles(
        "api::news-collection.news-collection"
      ).afterDelete(event);
    }
  },
};
