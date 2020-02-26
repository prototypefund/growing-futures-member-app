<template>
  <div class="sharetype-container">
    <div v-for="s in types" class="sharetype-item" :key="s.type" @click="selected(s)">
      {{ s.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareType',
  props: ['types'],
  data() {
    return {
      // shareTypes: [{uid:1, name:'kleiner Anteil'}, {uid:2, name:'grosser Anteil'}]
    }
  },
  methods: {
    selected(s) {
      this.$store.commit('mutate', { prop: 'shareType', value: s})
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.sharetype-container {
  font-size: 20px;
}

.sharetype-item {
  font-size: 20px;
  padding: 20px 0px;
  border-radius: $border-radius;
}
.sharetype-item:nth-child(odd) {
  background-color: $light;
}
</style>