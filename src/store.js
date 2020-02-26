import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import { getRecentShares, submitPoll, getProductList, getHouseholdInfo, getNextShare } from '@/services/share-service.js'

export default new Vuex.Store({
  state: {
    shareType: null,
    delivery: {},
    recentDeliveries: [],
    productList: {},
    household: {},
    poll: {},
    loading: false,
    user: null,
  },
  mutations: {
    mutate(state, { prop, value }) {
      state[prop] = value
    },
    updateProductList(context, productList){
      this.state.productList = productList
    }
  },
  actions: {
    async loadData() {
      this.state.loading = true
      console.dir("loading household info")
      this.state.household = await getHouseholdInfo('defaultPoll', this.state.user)
      console.dir("loading product list")
      this.state.productList = await getProductList('defaultPoll', this.state.user)
      console.dir("loading next share")
      this.state.delivery = await getNextShare(this.state.user)
      console.dir("loading recent shares")
      this.state.recentDeliveries = await getRecentShares(this.state.user)
      this.state.loading = false
    },
    async submitPoll(context, productList){
      console.dir(productList)
      await submitPoll(productList, this.state.household, this.state.user)
      this.commit('updateProductList', productList)
    }
  },
  getters: {
    user: state => state.user,
    share: state => state.delivery,
    productList: state => state.productList,
    recentDeliveries: state => state.recentDeliveries,
    household: state => state.household,
    loading: state => state.loading,
  }
})
