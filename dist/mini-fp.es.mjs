/**
 * @param {Array<Function>} [array] - Function list
 * @returns {Function} Composite function
 * @example
 *
 * const isFunc = f => typeof f == 'function'
 * conat isFunctionList = all(isFunc)([x => x + 1, y => y + 2])
 * isFunctionList //=> true
 *
 */
function all(f) {
  return function (array) {
    return array.reduce(function (acc, cur) {
      return acc && f(cur);
    }, true);
  };
}

/**
 * type-name - Just a reasonable typeof
 *
 * https://github.com/twada/type-name
 *
 * Copyright (c) 2014-2016 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/twada/type-name/blob/master/LICENSE
 */

var toStr = Object.prototype.toString;

function funcName (f) {
    if (f.name) {
        return f.name;
    }
    var match = /^\s*function\s*([^\(]*)/im.exec(f.toString());
    return match ? match[1] : '';
}

function ctorName (obj) {
    var strName = toStr.call(obj).slice(8, -1);
    if ((strName === 'Object' || strName === 'Error') && obj.constructor) {
        return funcName(obj.constructor);
    }
    return strName;
}

function typeName (val) {
    var type;
    if (val === null) {
        return 'null';
    }
    type = typeof val;
    if (type === 'object') {
        return ctorName(val);
    }
    return type;
}

var typeName_1 = typeName;

function validation(array) {
  if (typeName_1(array) != 'Array' && !all(function (x) {
    return typeof x == 'function';
  })(array)) throw new TypeError('Expected a Array<Function>');
}
/**
 * @param {Array<Function>} [array] - Function list
 * @returns {Function} Composite function
 * @example
 *
 * const f = composite([
 *  x => x + 1,
 *  x => x * 5,
 * ])
 *
 * f(10) //=> 55
 */


function composite(array) {
  validation(array);
  return array.reverse().reduce(function (g, f) {
    return function (x) {
      return g(f(x));
    };
  });
}

function mapIterate(xs, f) {
  var index = 0;
  var result = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = xs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      var r = f(i, index, xs);
      result.push(r);
      index++;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function mapEnumerable(xs, f) {
  if (_typeof(xs) != 'object') throw new TypeError('Expected a object');
  var index = 0;
  var props = Object.keys(xs);
  var result = new Array(props.length);

  while (index < props.length) {
    var key = props[index];
    result[index] = f(xs[key], key, xs);
    index++;
  }

  return result;
}

/**
 * @param {Function} [f]
 * @param {Array} [xs]
 * @returns {Array}
 * @example
 *
 * const plusOne = x => x + 1
 * const mapper = map(plusOne)
 *
 * mapper([0, 1, 2])
 * //=> [1, 2, 3]
 */

function map(f) {
  return function (xs) {
    if (!xs) throw new TypeError('Expected a iteratorable object, For example Array, Map, or Object.');
    return typeof xs[Symbol.iterator] == 'function' ? mapIterate(xs, f) : mapEnumerable(xs, f);
  };
}

/**
 * @param {Function} [f] - Function
 * @example
 *
 * const addEventOnceToDocument = once(document.addEventListener)
 * addEventOnceToDocument('click', () => console.log('clicked!'))
 */
function once(f) {
  if (typeof f != 'function') throw new TypeError('Expected a function');
  var result;
  var called = false;
  return function () {
    if (!called) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = f.apply(this, args);
      called = true;
    }

    return result;
  };
}

/**
 * @param {Number} [start] - Range start value
 * @param {Number} [to] - Range goal value
 * @param {Number} [step=1] - Range step
 * @return {Array<Number>} - Range array
 * @example
 *
 * const array = range(0, 10, 2)
 * array //=> [0, 2, 4, 6, 8]
 */
function range(start, to) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var array = [];

  for (var i = start; i < to; i += step) {
    array.push(i);
  }

  return array;
}

function toMap(obj) {
  var iterable = map(obj)(function (value, key) {
    return [key, value];
  });
  return new Map(iterable);
}

// import 'es6-symbol/implement'

export { all, composite, map, once, range, toMap };
