'use strict';

/**
 * precious-metal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::precious-metal.precious-metal');
