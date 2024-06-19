module.exports = {
  async beforeUpdate(event) {
    const { params } = event;


    const existingEntry = await strapi.entityService.findOne(
      'api::precious-metal.precious-metal',
      params.where.id,
      {
        fields: ['sale', 'purchase', 'centralBank']
      }
    );

    if (existingEntry && params.data) {
      params.data.salePrevious = existingEntry.sale;
      params.data.purchasePrevious = existingEntry.purchase;
      params.data.centralBankPrevious = existingEntry.centralBank;
    }
  },
};
