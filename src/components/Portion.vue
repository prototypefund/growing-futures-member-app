<template>
  <div class="portion-container">
    <div v-for="i in nonZeroItems" 
      :key="i.name" 
      class="portion-item" 
      @click="i.checked = !i.checked"
      :class="{ strike : i.checked }">
        <checkbox v-model="i.checked"/> {{ i.amount }} {{ i.unit | formatUnit }} {{ i.name }}
        <div v-if="i.note" class="note">{{ i.note }}</div>
    </div>
  </div>
</template>

<script>
import Checkbox from '@/components/utils/Checkbox.vue'
export default {
  name: 'Portion',
  props: ['items'],
  components: {
    Checkbox,
  },
  data() {
    return {
      localItems: this.items.map(i => Object.assign({}, i, { checked: false }))
    }
  },
  methods: {
  },
  computed: {
    nonZeroItems() {
      return this.localItems.filter(i => i.amount > 0)
    }
  },
  filters: {
    formatUnit(unit) {
      if(!unit)
        return ''
      switch (unit) {
        case "p":
          return "Stück"
        case "w":
          return "kg"
        default:
          return "k/A"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.portion-container {
  text-align: left;
  font-size: 20px;
}

.portion-item {
  margin: 20px 0px;
  font-weight: 500;
}
.strike {
  text-decoration: line-through;
}
.note {
  color: rgba($dark, 0.5);
  font-size: 16px;
  padding-left: 30px;
}
</style>
