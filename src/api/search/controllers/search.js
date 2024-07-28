module.exports = {
  async search(ctx) {
    const { query, types } = ctx.request.query;
    const page = parseInt(ctx.request.query.page) || 1;
    const pageSize = 10;

    if (!query) {
      ctx.throw(400, "Query is required");
    }

    const searchTypes = types
      ? types.split(",")
      : [
          "api::currency-exchange.currency-exchange",
          "api::vacancy.vacancy",
          "api::investment.investment",
          "api::deposit.deposit",
          "api::mortgage.mortgage",
          "api::card.card",
          "api::loan.loan",
          "api::news-collection.news-collection",
          "api::branche-and-atm.branche-and-atm",
          "api::account.account",
          "api::ibank-page.ibank-page",
          "api::safe-deposit-page.safe-deposit-page",
          "api::biometrics-page.biometrics-page",
          "api::vacancies-page.vacancies-page",
          "api::currency-control-page.currency-control-page",
          "api::investments-page.investments-page",
          "api::deposits-page.deposits-page",
          "api::salary-projects-page.salary-projects-page",
          "api::golden-crown-page.golden-crown-page",
          "api::encashment-page.encashment-page",
          "api::mortgage-page.mortgage-page",
          "api::card-page.card-page",
          "api::corporate-cards-page.corporate-cards-page",
          "api::head-office-contacts-page.head-office-contacts-page",
          "api::loans-individuals-page.loans-individuals-page",
          "api::loans-corporate-page.loans-corporate-page",
          "api::inter-transfers-swift-page.inter-transfers-swift-page",
          "api::coins-page.coins-page",
          "api::news-page.news-page",
          "api::general-info.general-info",
          "api::transfer-card-to-card-page.transfer-card-to-card-page",
          "api::payments-by-qr-code-page.payments-by-qr-code-page",
          "api::disclosures-page.disclosures-page",
          "api::cash-management.cash-management",
          "api::sms-notification.sms-notification",
          "api::spb-page.spb-page",
          "api::account-page.account-page",
          "api::merchant-acquiring-page.merchant-acquiring-page",
          "api::financial-security-page.financial-security-page",
          "api::hmb-square-page.hmb-square-page",
          "api::hmb-online-page.hmb-online-page",
          "api::hmb-online-business-page.hmb-online-business-page",
          "api::mir-pay-page.mir-pay-page",
        ];

    const results = await strapi
      .service("api::search.search")
      .search(query, searchTypes);

    // Фильтруем результаты, чтобы включить только опубликованные элементы
    const publishedResults = results.filter((item) => item.publishedAt);

    const paginatedResults = publishedResults.slice(
      (page - 1) * pageSize,
      page * pageSize
    );

    ctx.send({
      results: paginatedResults,
      pagination: {
        page,
        pageSize,
        total: publishedResults.length,
        totalPages: Math.ceil(publishedResults.length / pageSize),
      },
    });
  },
};
