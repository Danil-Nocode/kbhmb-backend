"use strict";

/**
 * cash-management service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::card-page.card-page");
