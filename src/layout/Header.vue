<template>
  <div>
    <h1>Header</h1>

    <ul>
      <li>
        <!-- <router-link to="/">Home</router-link> -->
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <!-- <router-link to="/about">About</router-link> -->
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped></style>
