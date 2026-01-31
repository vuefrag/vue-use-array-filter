'use strict';

const vue = require('vue');

// @__NO_SIDE_EFFECTS__
function useArrayFilter(list, fn) {
  return vue.computed(() => vue.toValue(list).map((i) => vue.toValue(i)).filter(fn));
}

exports.useArrayFilter = useArrayFilter;
