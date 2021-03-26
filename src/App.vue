<template>
  <div id="app">
    <Addition></Addition>
    <p>--------------------------------------</p>
    <Delete></Delete>
  </div>
</template>

<script>
import Addition from './components/Addition'
import Delete from './components/delete'
export default {
  name: "App",
  components: {
    Addition,Delete
  },
};
</script>

<style>
</style>
