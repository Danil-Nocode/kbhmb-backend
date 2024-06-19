'use strict';

/**
 * mortgage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mortgage.mortgage');
