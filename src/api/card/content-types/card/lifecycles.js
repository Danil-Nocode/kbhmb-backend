const sharedLifecycles = require("../../../shared-lifecycles");
const { getSingleTypeField } = require("../../../../utils/content-types");

async function addParentSlug(event) {
  const cardType = event.params.data.type;

  let modelName;
  if (cardType === "ФЛ") {
    modelName = "api::card-page.card-page";
  } else if (cardType === "ЮЛ") {
    modelName = "api::corporate-cards-page.corporate-cards-page";
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
    if (sharedLifecycles("api::card.card").afterCreate) {
      await sharedLifecycles("api::card.card").afterCreate(event);
    }
  },

  async afterUpdate(event) {
    if (sharedLifecycles("api::card.card").afterUpdate) {
      await sharedLifecycles("api::card.card").afterUpdate(event);
    }
  },

  async afterDelete(event) {
    if (sharedLifecycles("api::card.card").afterDelete) {
      await sharedLifecycles("api::card.card").afterDelete(event);
    }
  },
};
