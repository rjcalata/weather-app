<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'

export default {
  components: {
    Counter,
    Header,
    Footer,
  },
}
</script>

<style scoped></style>
