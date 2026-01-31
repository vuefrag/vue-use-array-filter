import { computed, toValue } from 'vue';

// @__NO_SIDE_EFFECTS__
function useArrayFilter(list, fn) {
  return computed(() => toValue(list).map((i) => toValue(i)).filter(fn));
}

export { useArrayFilter };
