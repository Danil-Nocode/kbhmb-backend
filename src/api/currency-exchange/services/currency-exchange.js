'use strict';

/**
 * currency-exchange service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::currency-exchange.currency-exchange');
