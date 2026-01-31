<p align="center">
  <img src="https://raw.githubusercontent.com/vuefrag/vue-use-array-filter/main/banner.svg" alt="vue-use-array-filter" width="100%" />
</p>

<h1 align="center">vue-use-array-filter</h1>

<p align="center">A Vue 3 composition API utility providing a reactive wrapper around Array.filter(), returning a computed array that updates when source array or predicate changes.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-use-array-filter"><img src="https://img.shields.io/npm/v/vue-use-array-filter.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-use-array-filter"><img src="https://img.shields.io/npm/dm/vue-use-array-filter.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-use-array-filter
```

## Usage

```ts
import { useArrayFilter } from 'vue-use-array-filter'
import { ref } from 'vue'

const list = ref([1, 2, 3, 4, 5])
const evens = useArrayFilter(list, (val) => val % 2 === 0)

console.log(evens.value) // [2, 4]

list.value.push(6)
console.log(evens.value) // [2, 4, 6]
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
