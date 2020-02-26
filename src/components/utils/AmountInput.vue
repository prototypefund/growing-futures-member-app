<template>
  <div class="amount-input-container">
    <div class="less" @click="changeValue(value-1)">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
    </div>
    <div class="count">
      {{ value }}
    </div>
    <div class="more" @click="changeValue(value+1)">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AmountInput',
  props: ['value'],
  data() {
    return {
    }
  },
  methods: {
    changeValue(v) {
      if(v >= 0) {
        this.$emit('input', v)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.amount-input-container {
  display: flex;
}

.less, .more {
  flex: 1;
}

.count {
  flex: 1;
  font-weight: bold;
  font-size: 20px;
  color: $primary;
}
</style>