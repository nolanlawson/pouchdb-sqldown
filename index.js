'use strict';
'use strict';

// TODO: this should be an "extras" API
var pluginBase = require('pouchdb/lib/plugins/base');
var adapterConfig = require('./config');
var downAdapter = require('sqldown');
pluginBase(adapterConfig, downAdapter);
