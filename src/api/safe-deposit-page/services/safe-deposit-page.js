'use strict';

/**
 * safe-deposit-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::safe-deposit-page.safe-deposit-page');
