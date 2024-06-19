'use strict';

/**
 * news-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-collection.news-collection');
