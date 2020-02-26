<template>
  <div class="productlist-container">
    <div v-for="p in products" class="product-item" :key="p.uid"
                              @click="select(p)">
      {{ p.name }}

      <span v-if="submittedFeedback.map(f => f.name).includes(p.name)">
        <i :class="['fa', getHappinesClass(p)]"></i>
      </span>

    </div>
    <div class="back" @click="$emit('back')">zurück</div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['products', 'submittedFeedback'],
  data() {
    return {
      key: "value"
    }
  },
  methods: {
    select(p){
      let feedbackGiven = this.submittedFeedback.find(f => p.name == f.name)
      if (!feedbackGiven){
        this.$emit('product-selected', p)
      } else {
        //toast?
      }
    },
    getHappinesClass(p){
      let index = this.happinessIndex(p)
      switch (index){
        case 1:
          return 'fa-smile-beam'  
        case 0:
          return 'fa-smile'  
        case -1:
          return 'fa-meh'  
        case -2:
          return 'fa-angry'  
        default:
          return ""
      }
    },
    happinessIndex(p) {
      let feedback = this.submittedFeedback.find(f => f.name == p.name)
      if (feedback) {
        return feedback.quality - Math.abs(feedback.quantity)
      }
      return 0;
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.product-item {
  font-size: 20px;
  padding: 20px 0px;
  border-radius: $border-radius;
}
.product-item:nth-child(odd) {
  background-color: $light;
}
</style>
