const sharedLifecycles = require("../../../shared-lifecycles");
const { getSingleTypeField } = require("../../../../utils/content-types");

async function addParentSlug(event) {
  const cardType = event.params.data.type;

  let modelName;
  if (cardType === "ФЛ") {
    modelName = "api::loans-individuals-page.loans-individuals-page";
  } else if (cardType === "ЮЛ") {
    modelName = "api::loans-corporate-page.loans-corporate-page";
  }

  const parentSlug = await getSingleTypeField(modelName, "slug");

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
    if (sharedLifecycles("api::loan.loan").afterCreate) {
      await sharedLifecycles("api::loan.loan").afterCreate(event);
    }
  },

  async afterUpdate(event) {
    if (sharedLifecycles("api::loan.loan").afterUpdate) {
      await sharedLifecycles("api::loan.loan").afterUpdate(event);
    }
  },

  async afterDelete(event) {
    if (sharedLifecycles("api::loan.loan").afterDelete) {
      await sharedLifecycles("api::loan.loan").afterDelete(event);
    }
  },
};
