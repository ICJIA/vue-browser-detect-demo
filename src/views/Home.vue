<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <br />
    <github></github>
    {{ $browserDetect }}

    <div>Github</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Github from '@/components/Github'
export default {
  name: "home",
  components: {
    Github
  }
};
</script>


