import Vue from 'vue'

Vue.directive('isNull', (el, binding) => {
  if (
    binding.value === 'null' ||
    binding.value === null ||
    binding.value === ''
  ) {
    el.remove()
  }
})
