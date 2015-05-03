pouchdb-sqldown
======

PouchDB adapter using [SQLdown](https://github.com/calvinmetcalf/SQLdown), which itself uses [knex](https://github.com/tgriesser/knex), which in the browser will use WebSQL.

Basically this is just a demo to show that you can now browserify PouchDB adapter plugins for use in the browser, using any [LevelDOWN adapter](https://github.com/Level/levelup/wiki/Modules#storage-back-ends) suited for the browser.

In practice, there's no reason to use this, because PouchDB itself has its own very efficient WebSQL adapter. Hence why this is "just a demo."

Usage
---

    npm install pouchdb-sqldown
    
Then:

```js
var PouchDB = require('pouchdb');
require('pouchdb-sqldown');

var db = new PouchDB('mydb', {adapter: 'sqldown'});
```

Building
---

    npm run build