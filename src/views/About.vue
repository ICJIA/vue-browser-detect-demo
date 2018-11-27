<template>
  <div>{{test.title}}</div>
</template>

<script>
export default {
  mounted() {
    this.test = require("../../public/api/test.json");
  },
  data() {
    return {
      test: {}
    };
  }
};
</script>

<style scoped>
</style>