'use strict';

/**
 * billing-calculator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::billing-calculator.billing-calculator');
