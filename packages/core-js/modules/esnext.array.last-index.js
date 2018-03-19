// https://github.com/keithamus/proposal-array-last
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var defineProperty = require('../internals/object-define-property').f;

if (DESCRIPTORS && !('lastIndex' in [])) {
  defineProperty(Array.prototype, 'lastIndex', {
    configurable: true,
    get: function lastIndex() {
      var O = toObject(this);
      var len = toLength(O.length);
      return len == 0 ? 0 : len - 1;
    }
  });
}
