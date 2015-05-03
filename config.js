'use strict';

module.exports = {
  name: 'sqldown',
  valid: function () {
    // is WebSQL supported?
    return typeof openDatabase === 'function';
  },
  use_prefix: true
};

