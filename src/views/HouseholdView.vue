<template>
  <div class="household-view-container">
    <div class="view-header-background">
      <div class="view-title">Deine Menge</div>
        <div v-if="$store.getters.loading">
            <div  class="view-header card">
              Einen Augenblick bitte
            </div>
        </div>
        <div v-else>
            <div v-if="pollActive" class="view-header card">
              Wie viele Personen essen in deinem Haushalt?
            </div>
            <div v-else class="view-header card">
              Tut uns leid, gerade ist keine Umfrage aktiv!
            </div>
        </div>
    </div>
    <div class="content card">
      <div v-if="$store.getters.loading">
        <b-loading :is-full-page="false" :active.sync="$store.getters.loading" :can-cancel="true"></b-loading>
      </div>
      <div v-else-if="pollActive">
        <div class="adults">
          <div class="label">großere Mäuler</div>
          <amount-input v-model="adults"/>
        </div>
        <div class="children">
          <div class="label">kleine Mäuler</div>
          <amount-input v-model="children"/>
        </div>

        <div class="button-container">
          <div class="button" @click="proceed()">
            Weiter
          </div>
        </div>
      </div>
      <div v-else>
        Wir geben euch Bescheid sobald die Jahresumfrage läuft!
      </div>
    </div>
  </div>
</template>

<script>
import AmountInput from '@/components/utils/AmountInput.vue'

export default {
  name: 'Household',
  components: {
    AmountInput,
  },
  async mounted() {
    let adults = this.$store.getters.household.adults
    if (adults)
      this.adults = adults 
    let children = this.$store.getters.household.adults
    if (children)
      this.children = children
  },
  data() {
    return {
      loading: false,
      adults: 2,
      children: 1,
    }
  },
  methods: {
    proceed() {
      this.$store.commit('mutate', { prop: 'household', value: { adults: this.adults, children: this.children }})
      this.$router.push('/preferences')
    }
  },
  computed: {
    pollActive() {
      let productList = this.$store.getters.productList
      if (productList)
        return productList.collectData
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.content {
  margin-top: 100px;
  display: inline-block;
  padding: 30px 40px;
  min-width: 80%;
  box-sizing: border-box;

  font-size: 18px;
}

.adults {
  margin-bottom: 20px;
}

.label {
  margin-bottom: 10px;
}

.button-container {
  margin-top: 50px;
}
</style>
