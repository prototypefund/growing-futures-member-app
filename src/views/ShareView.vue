<template>
  <div class="shareview-container">
    <div class="view-header-background">
      <div v-if="$store.getters.loading">
        <div class="view-title"></div>
        <div class="view-header card">
          Hallo {{$store.getters.user.firstName}}
          <br>
          <br>
          Einen Augenblick noch...
        </div>
        <div class="content card">
          Wir fragen gerade nach was es Leckeres gibt.
          <b-loading :is-full-page="false" :active.sync="$store.getters.loading" :can-cancel="true"></b-loading>

        </div>
      </div>
      <div v-else>
        <div v-if="share && share.name" class="shareAvailable">
          <div class="view-title">{{displayDate}}</div>
          <div class="view-header card">
            Hallo {{$store.getters.user.firstName}}
            <br>
            <br>
            Dein Anteil diese Woche
            {{share.name}}
          </div>
          <div class="content card">
            <portion :items="shareContent"/>
          </div>
        </div>
        <div v-else>
          <div class="view-header card">
            Kein Anteil geplant
          </div>
          <div class="content card">
            Leider ist der nächste Anteil noch nicht geplant
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Portion from '@/components/Portion.vue'
import moment from 'moment'

export default {
  name: 'ShareView',
  async mounted() {
  },
  components: {
    Portion,
  },
  computed: {
    shareContent() {
      if (this.share && this.share.delivery) {
        return this.share.delivery.contents
      } else {
        return []
      }
    },
    share() {
      return this.$store.getters.share
    },
    displayDate() {
      if(this.share) {
        return moment(this.share.date).format('DD MMM YYYY')
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.content{
  margin-top: 50px;
  display: inline-block;
  padding: 30px 40px;
  width: 90%;
  box-sizing: border-box;
}
</style>
