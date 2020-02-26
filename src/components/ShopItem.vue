<template>
  <div class="shopitem-container">
    <div class="name">
      {{ item.name }}
    </div>
    <div class="item-details">
      <div v-if="item.description" class="description">
        {{ item.description }}
      </div>
      <div class="amount">
        <div class="left">
          <input type="number" class="input" v-model.number="amount" min="0" :max="item.maxAmount"/>
        </div>
        <div class="right unit">
          {{ item.unit }}
        </div>
      </div>
      <div v-if="item.maxAmount > 0" class="max-amount">
        (maximal {{ item.maxAmount }} {{ item.unit }})
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      amount: 0,
    }
  },
  methods: {
    name() {

    }
  },
  watch: {
    amount() {
      if(this.amount > 0) {
        // TODO: update somewhere?
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.shopitem-container {
  margin: 5px 0px;
  text-align: left;
}

.name {
  font-weight: bold;
  font-size: 18px;
}

.item-details {
  padding-left: 20px;
}

.amount {
  display: flex;

  .left {
    flex: 1;
  }

  .left, .right {
    // padding: 10px 20px;
  }
}

.unit {
  width: 50px;
  line-height: 46px;
  font-weight: bold;
  opacity: 0.6;
  padding: 0px 10px;
}

.max-amount {
  font-size: 14px;
  opacity: 0.5;
  text-align: right;
}
</style>