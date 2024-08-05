// const sharedLifecycles = require("../../../shared-lifecycles");
//
// module.exports = sharedLifecycles("api::mortgage.mortgage");
// const sharedLifecycles = require("../../../shared-lifecycles");

// module.exports = sharedLifecycles("api::deposit.deposit");
const sharedLifecycles = require("../../../shared-lifecycles");
const { getSingleTypeField } = require("../../../../utils/content-types");

async function addParentSlug(event) {
  const parentSlug = await getSingleTypeField(
    "api::mortgage-page.mortgage-page",
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
    if (sharedLifecycles("api::mortgage.mortgage").afterCreate) {
      await sharedLifecycles("api::mortgage.mortgage").afterCreate(event);
    }
  },

  async afterUpdate(event) {
    if (sharedLifecycles("api::mortgage.mortgage").afterUpdate) {
      await sharedLifecycles("api::mortgage.mortgage").afterUpdate(event);
    }
  },

  async afterDelete(event) {
    if (sharedLifecycles("api::mortgage.mortgage").afterDelete) {
      await sharedLifecycles("api::mortgage.mortgage").afterDelete(event);
    }
  },
};
