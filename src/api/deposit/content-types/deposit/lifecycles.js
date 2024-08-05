// const sharedLifecycles = require("../../../shared-lifecycles");

// module.exports = sharedLifecycles("api::deposit.deposit");
const sharedLifecycles = require("../../../shared-lifecycles");
const { getSingleTypeField } = require("../../../../utils/content-types");

async function addParentSlug(event) {
  const parentSlug = await getSingleTypeField(
    "api::deposits-page.deposits-page",
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
    if (sharedLifecycles("api::deposit.deposit").afterCreate) {
      await sharedLifecycles("api::deposit.deposit").afterCreate(event);
    }
  },

  async afterUpdate(event) {
    if (sharedLifecycles("api::deposit.deposit").afterUpdate) {
      await sharedLifecycles("api::deposit.deposit").afterUpdate(event);
    }
  },

  async afterDelete(event) {
    if (sharedLifecycles("api::deposit.deposit").afterDelete) {
      await sharedLifecycles("api::deposit.deposit").afterDelete(event);
    }
  },
};
