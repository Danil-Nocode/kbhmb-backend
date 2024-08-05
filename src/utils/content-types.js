async function getSingleTypeField(modelName, fieldName = "slug") {
  try {
    const singleType = await strapi.entityService.findOne(modelName, 1, {
      fields: [fieldName],
    });

    if (singleType && singleType[fieldName]) {
      return singleType[fieldName];
    } else {
      console.warn(`${fieldName} not found in ${modelName}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching ${fieldName} from ${modelName}:`, error);
    throw error;
  }
}

module.exports = { getSingleTypeField };
