/*jshint expr:true */
'use strict';

window.PouchDB = require('pouchdb');
require('../');

// hack to make PouchDB only use the sqldown adapter
window.PouchDB.preferredAdapters = ['sqldown'];
