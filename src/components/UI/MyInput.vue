<template lang="">
  <input type="text" class="input" v-model="modelValue" @input="inputValue">
</template>

<script>
export default {
  name: 'my-input',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: [String, Number]
    }
  },
  methods: {
    inputValue(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
  .input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
  }
</style>