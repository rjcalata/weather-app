<template>
  <div class="card">
    <div class="count">{{ $store.state.count }}</div>
    <div class="buttons">
      <button class="btn mr-1" @click="$store.dispatch('decreaseCount')">
        -
      </button>
      <button class="btn" @click="$store.dispatch('increaseCount')">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
    }
  },
}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.count {
  font-size: 5em;
  padding-top: 2em;
}

.btn {
  font-size: 2em;
  padding-left: 1em;
  padding-right: 1em;
}

.mr-1 {
  margin-right: 1em;
}
</style>
