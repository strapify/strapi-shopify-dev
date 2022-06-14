'use strict';

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '190b2db6aaddc446f4efa6de65821976'),
  },
});
