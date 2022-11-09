<template>
  <div class="flex justify-content-center align-items-center flex-column">
    <div class="text-8xl pt-4">{{ $store.state.count }}</div>
    <div>
      <Button label="-" @click="$store.dispatch('decreaseCount')" class="text-4xl p-4 mr-2"/>

      <Button label="+" @click="$store.dispatch('increaseCount')" class="text-4xl p-4"/>
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
</style>
