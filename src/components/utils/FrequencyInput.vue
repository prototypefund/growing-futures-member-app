<template>
  <div class="frequencyinput-container">
    <div class="selection-item" @click="select(3)" :class="{selected: value == 3}">jeden Tag</div>
    <div class="selection-item" @click="select(2)" :class="{selected: value == 2}">4-5 mal pro Woche</div>
    <div class="selection-item" @click="select(1)" :class="{selected: value == 1}">2-3 mal pro Woche</div>
    <div class="selection-item" @click="select(0)" :class="{selected: value == 0}">gar nicht</div>
  </div>
</template>

<script>
export default {
  name: 'FrequencyInput',
  props: ['value'],
  methods: {
    select(n) {
      this.$emit('input', n)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.selection-item {
  padding: 15px 0px;
  font-size: 18px;
  cursor: pointer;
}

.selected {
  color: $primary;
  font-weight: bold;
}
</style>