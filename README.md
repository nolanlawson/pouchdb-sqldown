pouchdb-sqldown
======

[![Build Status](https://travis-ci.org/nolanlawson/pouchdb-sqldown.svg)](https://travis-ci.org/nolanlawson/pouchdb-sqldown)

PouchDB adapter using [SQLdown](https://github.com/calvinmetcalf/SQLdown), which itself uses [knex](https://github.com/tgriesser/knex), which in the browser will use WebSQL.

Basically this is just a demo to show that you can now browserify PouchDB adapter plugins for use in the browser, using any [LevelDOWN adapter](https://github.com/Level/levelup/wiki/Modules#storage-back-ends) suited for the browser.

In practice, there's no reason to use this, because PouchDB itself has its own very efficient WebSQL adapter. Hence why this is "just a demo."

Usage
---

With Browserify
----

Install this plugin and PouchDB:

    npm install --save pouchdb
    npm install --save pouchdb-sqldown
    

Then `require()` them:

```js
var PouchDB = require('pouchdb');
require('pouchdb-sqldown');

var db = new PouchDB('mydb', {adapter: 'sqldown'});
```

Then just browserify your code.

Standalone script
------

Or if you don't want to use Browserify, and you want to use the scripts directly in the browser, there's a standalone script included in `dist/`. So you just add it in your HTML after PouchDB:

```html
<script src="pouchdb.js"></script>
<script src="pouchdb.sqldown.js"></script>
```

Then you can create a SQLdown-backed database like:

```js
var db = new PouchDB('mydb', {adapter: 'sqldown'});
```

Building
---

    npm run build
