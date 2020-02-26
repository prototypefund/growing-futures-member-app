<template>
  <div class="feedback-view-container">
    <div class="view-header-background">
      <div class="view-title">Feedback</div>
      <div class="view-header card">
        Wie zufrieden bist du?
      </div>
    </div>
    <div class="content card">
      <div v-if="recentDeliveries.length == 0">
        Keine Lieferungen gefunden.
      </div>
      <div v-if="selectedDelivery == null" class="deliveries">
        <span style="font-size: 20px;">Letzte Lieferungen</span>
        <div v-for="d in recentDeliveries" 
          class="delivery" 
          :key="d.date"
          @click="selectedDelivery = d.delivery">
          {{ moment(d.date).format('DD MMM YYYY') }}
        </div>
      </div>
      <div v-else class="feedback">
        <product-list v-if="feedbackItem == null" :products="products"
          :submittedFeedback="submittedFeedback"
          @product-selected="p => feedbackItem = p"
          @back="selectedDelivery = null"/>
        <feedback v-else 
          :feedback-item="feedbackItem.name" 
          @feedback="submitFeedback"
          @cancel="feedbackItem = null"/>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Feedback from '@/components/Feedback.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'FeedbackView',
  components: {
    Feedback,
    ProductList,
  },
  async mounted() {
    this.recentDeliveries = this.$store.getters.recentDeliveries
  },
  data() {
    return {
      selectedDelivery: null,
      feedbackItem: null,
      submittedFeedback: [],
      recentDeliveries: [],
      moment: moment,
    }
  },
  methods: {
    submitFeedback(feedback) {
      this.feedbackItem = null
      console.dir(feedback)
      this.postData('https://hooks.slack.com/services/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', {"text": JSON.stringify(feedback)})
      this.submittedFeedback.push(feedback)
    },
    async postData(url, data){
        // eslint-disable-next-line no-unused-vars
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'no-cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
                    'Content-Type': 'application/json'
                      // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    }
  },
  computed: {
    products() {
      if(this.selectedDelivery) {
        return this.selectedDelivery.contents
      }
      return []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.content {
  display: inline-block;
  padding: 30px 40px;
  font-size: 18px;
  width: 90%;
  margin: 50px 0px;
  box-sizing: border-box;
}

.delivery {
  font-size: 20px;
  padding: 20px 0px;
  border-radius: $border-radius;
  
  &:nth-child(odd) {
    background-color: $light;
  }
}
</style>
