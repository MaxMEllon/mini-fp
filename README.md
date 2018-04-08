# mini-fp

[![Build Status](https://travis-ci.org/MaxMEllon/mini-fp.svg?branch=master)](https://travis-ci.org/MaxMEllon/mini-fp)
[![Coverage Status](https://coveralls.io/repos/github/MaxMEllon/mini-fp/badge.svg?branch=master)](https://coveralls.io/github/MaxMEllon/mini-fp?branch=master)

**A library provide utility functions for functional programming.**

The mini-fp library exported as a [UMD](https://github.com/umdjs/umd) and [ESmodule](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

Installation
---

In a common browser:

```html
<script src="mini-fp.umd.js"></script>
```

In a modern browser (via ESmodules):

```javascript
import * as F from 'mini-fp'
```

Tree shaking:
```javascript
// just import that when you want to use functions.
import { map } from 'mini-fp'
```

Using npm:

```bash
$ npm i --save mini-fp
```

In Node.js:

```javascript
const F = require('mini-fp')
```

In Node.js (experimental-modules):

```javascript
import F from 'mini-fp'
```

Requirements
---

- *node* >= **6.x**
- *browser*
  - Safari >= **7**

Q & A
---

### Symbol not found

Using [medikoo/es6-symbol](https://github.com/medikoo/es6-symbol).

```javascript
require('es6-symbol/implement')
```

