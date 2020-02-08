<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <br />
    
    {{ $browserDetect }}

   <Github></Github>
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


