<template>
  <div class="feedback-container">
    <div class="product">
      {{ feedbackItem }}
    </div>
    <div class="question">
      Wie war die Qualität?
    </div>
    <div class="feedback">
      <div class="label">{{ qualityLabel }}</div>
      <input type="range" min="-1" max="1" v-model.number="quality"/>
    </div>
     <div v-if="quality == -1" class="feedback" style="margin-top: 30px;">
      <textarea type="text" class="input" v-model="qualityDetail" placeholder="Was hat nicht gepasst?"/>
    </div>    
    <div class="question" style="margin-top:40px;">
      Wie hat die Menge gepasst?
    </div>
    <div class="feedback">
      <div class="label">{{ quantityLabel }}</div>
      <input type="range" min="-1" max="1" v-model.number="quantity"/>
    </div>
    <div class="feedback" style="margin-top: 30px;">
      <textarea type="text" class="input" v-model="other" placeholder="Was ich noch sagen wollte..."/>
    </div>    
    
    <div class="submit">
      <div class="button" @click="submit">Abschicken</div>
    </div>

    <div class="cancel" @click="$emit('cancel')">
      zurück
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feedback',
  props: ['feedbackItem'],
  data() {
    return {
      quality: 0,
      quantity: 0,
      other: '',
      qualityDetail: '',

      qualityTags: ['nicht gut', 'in Ordnung', 'super'],
      quantityTags: ['zu wenig', 'genau richtig', 'zu viel'],
    }
  },
  methods: {
    submit() {
      this.$emit('feedback', { user: this.$store.getters.user, name:
        this.feedbackItem, quality: this.quality, qualityDetail:
        this.qualityDetail, quantity: this.quantity, other: this.other})
    }
  },
  computed: {
    qualityLabel() {
      return this.qualityTags[this.quality+1]
    },
    quantityLabel() {
      return this.quantityTags[this.quantity+1]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';
@import '@/assets/slider.scss';

.feedback-container {
}

.product {
  font-size: 20px;
  font-weight: bold;
  color: rgba($dark, 0.5);
}
.question {
  font-weight: bold;
}
.label {
  font-style: italic;
}

.submit, .cancel {
  margin-top: 30px;
}

.input {
  width: 100%;
  height: 45px;
  transition: height 0.6s;
  font-size: 16px;
  border: 1px solid rgba($dark, 0.5);

  &:focus {
    height: 100px;
    border: 1px solid $primary;
  }
}
</style>
