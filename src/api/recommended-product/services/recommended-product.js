'use strict';

/**
 * recommended-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recommended-product.recommended-product');
