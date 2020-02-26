<template>
  <div class="navbar-container">
    <!-- <router-link :to="'/'" tag="div" class="nav-item">
    </router-link> -->
    <router-link :to="'/share'" tag="div" class="nav-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    </router-link>
    <router-link :to="'/household'" tag="div" class="nav-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    </router-link>
    <router-link :to="'/feedback'" tag="div" class="nav-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    </router-link>
    <div class="nav-item" @click="logout()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('GROWING-FUTURES:USER')
      this.$store.commit('mutate', { prop: 'user', value: null })
      this.$router.replace('/login')
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/shared.scss';

.navbar-container {
  max-width: 500px;
  margin: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  border-top: 1px solid rgba($dark, 0.5);
  background-color: $dark;
  color:white;

  div {
    flex: 1;
  }
}

.nav-item {
  padding: 20px;
  cursor: pointer;
}

.router-link-exact-active {
  color: $primary;
  font-weight: bold;
}
</style>