'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/contact-form',
      handler: 'contact-form.submit',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
