<template>
  <div class="category-amount-container">
    <div class="category-name" >
      {{ category.category.name }}
      <div v-if="category.content && category.content.length > 0" 
        class="expand-subitems" 
        :class="{ expanded: subItemsExpanded }"
        @click="subItemsExpanded = !subItemsExpanded">
        <i class="fa fa-chevron-down"></i>
      </div>
    </div>
    <div v-if="!subItemsExpanded" class="category-amount">
      <div class="levels">
        <div class="level">nix</div>
        <div class="level">wenig</div>
        <div class="level">mittel</div>
        <div class="level">viel</div>
      </div>
      <input type="range" v-model.number="category.amount" min="0" max="3"/>
    </div>
    <div v-if="subItemsExpanded" class="sub-items">
      <div v-for="s in category.content" :key="s.name" class="sub-item">
        <div v-if="s.includeInPoll">
           {{ s.name }}
          <div class="levels">
            <div class="level">nix</div>
            <div class="level">wenig</div>
            <div class="level">mittel</div>
            <div class="level">viel</div>
          </div>
          <input type="range" v-model.number="s.amount" min="0" max="3"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryAmount',
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      subItemsExpanded: false
    }
  },
  methods: {
    name() {

    }
  },
  watch: {
    categoryAmount: function(newAmount) {
      this.category.content.forEach(c => c.amount = newAmount)
    },
  },
  computed: {
    categoryAmount() {
      return this.category.amount
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';
@import '@/assets/slider.scss';

.category-amount-container {
  text-align: left;
  margin-bottom: 20px;
}

.category-name {
  font-size: 18px;
  font-weight: bold;

  .expand-subitems {
    float: right;
    transition: 0.2s all;

    &.expanded {
      transform: rotate(180deg);
    }
  }
}

.levels {
  display: flex;
  margin: 10px 0px;
  color: rgba($dark, 0.5);

  .level {
    flex: 1;
    text-align: center;
  }
}

.sub-items {
  .sub-item {
    margin: 10px 0px;
    padding-left: 10px;
  }
}
</style>
