const sharedLifecycles = require("../../../shared-lifecycles");
const { getSingleTypeField } = require("../../../../utils/content-types");

async function addParentSlug(event) {
  const parentSlug = await getSingleTypeField(
    "api::account-page.account-page",
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
    if (sharedLifecycles("api::account.account").afterCreate) {
      await sharedLifecycles("api::account.account").afterCreate(event);
    }
  },

  async afterUpdate(event) {
    if (sharedLifecycles("api::account.account").afterUpdate) {
      await sharedLifecycles("api::account.account").afterUpdate(event);
    }
  },

  async afterDelete(event) {
    if (sharedLifecycles("api::account.account").afterDelete) {
      await sharedLifecycles("api::account.account").afterDelete(event);
    }
  },
};
