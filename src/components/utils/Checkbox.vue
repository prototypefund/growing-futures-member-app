<template>
  <div class="checkbox-container" @click.stop="toggle()">
    <div v-if="value" class="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: relative;left: 1px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
    </div>
    <div v-else class="false"></div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: ['value'],
  methods: {
    toggle() {
      this.$emit('input', !this.value)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.checkbox-container {
  position: relative;
  top: 4px;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba($dark, 0.2);
}

.true, .false {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.true {
  background-color: $primary;
  color: white;
}
.false {
  background-color: white;
}
</style>