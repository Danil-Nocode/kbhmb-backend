const sharedLifecycles = require("../../../shared-lifecycles");
const { getSingleTypeField } = require("../../../../utils/content-types");

async function addParentSlug(event) {
  const parentSlug = await getSingleTypeField(
    "api::investments-page.investments-page",
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
    if (sharedLifecycles("api::investment.investment").afterCreate) {
      await sharedLifecycles("api::investment.investment").afterCreate(event);
    }
  },

  async afterUpdate(event) {
    if (sharedLifecycles("api::investment.investment").afterUpdate) {
      await sharedLifecycles("api::investment.investment").afterUpdate(event);
    }
  },

  async afterDelete(event) {
    if (sharedLifecycles("api::investment.investment").afterDelete) {
      await sharedLifecycles("api::investment.investment").afterDelete(event);
    }
  },
};
