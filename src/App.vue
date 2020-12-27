<template>
  <div id="nav">
    <!-- <router-link to="/">Promotion</router-link> | -->
    <router-link :to="{ name : 'Merchants'}">List of Merchants</router-link> |
    <router-link :to="{ name : 'About'}">My subscription</router-link>
    <div v-if="showModal">
      <Modal @close="toggleModal"/>
    </div>
  </div>

  <!-- <button @click="redirect">Redirect</button> -->
  <button @click="back">Back</button>
  <!-- <button @click="forward">Go Forward</button> -->

  <router-view/>
</template>

<script>

import Modal from './components/Modal.vue'

export default {
  components: { Modal },
  data(){
    return {
      showModal: true,
    }
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'Home'})
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    },
    toggleModal(){
      this.showModal = !this.showModal
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: #42b983;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: 2px solid white;
  border-radius: 4px;
  background-color: white;
}

body {
  background: beige;
}
</style>
