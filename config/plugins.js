'use strict';

const path = require('path');

module.exports = ({ env }) => ({
  shopify: {
    enabled: true,
    resolve: path.resolve(__dirname, '../plugins/strapi-plugin-shopify'),
  },
});
