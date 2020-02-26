<template>
  <div class="preference-container">
    <div class="question">{{ item. question }}</div>
    <div class="frequency">
      <frequency-input v-model="frequency"/>
    </div>
    <div class="next button">Weiter</div>
  </div>
</template>

<script>
import FrequencyInput from '@/components/utils/FrequencyInput.vue'
export default {
  name: 'Preference',
  props: ['item'],
  components: {
    FrequencyInput,
  },
  data() {
    return {
      frequency: 2
    }
  },
  methods: {
    name() {

    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.question{
  font-size: 20px;
  font-weight: 500;
}

.frequency {
  margin: 20px 0px;
}

</style>
