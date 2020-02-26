<template>
  <div class="shopview-container">
    <div class="view-header-background">
      <div class="view-title">KW 31</div>
      <div class="view-header card">
        Was hättest du gerne?
      </div>
    </div>
    <div class="content card">
      <shop-item v-for="item in items" :key="item.uid" :item="item"/>
    </div>
  </div>
</template>

<script>
import ShopItem from '@/components/ShopItem.vue'

export default {
  name: 'ShopView',
  components: {
    ShopItem,
  },
  data() {
    return {
      items: [
        {
          uid: 1,
          name: 'Kartoffeln',
          unit: 'kg',
          maxAmount: 100,
          description: 'festkochende Cinderella'
        },
        {
          uid: 2,
          name: 'Kopfsalat',
          unit: 'Stück',
          maxAmount: 3
        },
      ]
    }
  },
  methods: {
    name() {

    }
  },
  computed: {
    shareType() {
      return this.$store.getters.shareType
    },
    shareTypes() {
      return this.$store.getters.shareTypes
    },
    shareContent() {
      return this.$store.getters.shareContent
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.content {
  margin-top: 50px;
  display: inline-block;
  padding: 30px 40px;
  width: 90%;
  box-sizing: border-box;
}
</style>