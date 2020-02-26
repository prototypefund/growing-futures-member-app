<template>
  <div class="loginview-container">
    <div class="view-header-background">
      <div class="view-title">Login</div>
      <div class="view-header card">
        Herzlich Willkommen!

        <div class="login">
          Benutzername: 
          <input type="text" class="input" v-model="username"/>
        </div>
        <div class="login-button-container">
          <div class="button" :disabled="!usernameValid" @click="submit()">
            <span v-if="loading"><i class="fa fa-spin fa-circle-notch"/></span>
            <span v-else>Einloggen</span>
          </div>
        </div>
        <div v-if="err" class="error">{{ err }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import loginService from '@/services/login-service.js'

export default {
  name: 'LoginView',
  components: {
  },
  data() {
    return {
      username: '',
      loading: false,
      err: null,
    }
  },
  methods: {
    async submit() {
      let credentials = btoa(this.username.toLowerCase() + ':' )
      this.loading = true
      let userID = await loginService.login(credentials)
        .catch(err => this.err = err)
  
      if(!this.err) {
        this.$store.commit('mutate', { prop: 'user', value: userID })
        localStorage.setItem('GROWING-FUTURES:USER', JSON.stringify(userID))
        this.$router.replace('/')
        this.$store.dispatch('loadData')
      }
      this.loading = false
    }
  },
  computed: {
    usernameValid() {
      return this.username.length > 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.login {
  margin-top: 50px;
  color: $dark;
}
.login-button-container {
  margin-top: 30px;

  
  .button[disabled]{
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
}
.error {
  margin-top: 30px;
  color: $red;
}
</style>
