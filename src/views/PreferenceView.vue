<template>
  <div class="preference-view-container">
    <div class="view-header-background">
      <div class="view-title">Deine Präferenzen</div>
      <div class="view-header card">
        Was esst ihr gerne?
      </div>
    </div>
    <div class="content card">
      <div v-for="c in productList.products" :key="c.uid" >
        <category-amount v-if="c.category.includeInPoll" :category="c"/>
      </div>
    </div>
    <div class="done card">
      <div class="button" @click="submitProductList">Fertig!</div>
    </div>
  </div>
</template>

<script>
import CategoryAmount from '@/components/utils/CategoryAmount.vue'
export default {
  name: 'PreferenceView',
  components: {
    CategoryAmount
  },
  async mounted() {
    this.productList = JSON.parse(JSON.stringify(this.$store.getters.productList))
  },
  data() {
    return {
      alreadySubmitted: false,
      productList: [],
    }
  },
  methods: {
    submitProductList() {
      this.$store.dispatch('submitPoll', this.productList)
      this.success()
    },
    success() {
      this.$buefy.toast.open('Deine Präferenzen wurden erfolgreich aktualisiert')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.content {
  margin: 50px 20px;
  display: inline-block;
  padding: 30px 40px;
  min-width: 90%;
  box-sizing: border-box;
}
</style>
