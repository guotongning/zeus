<template xmlns="http://www.w3.org/1999/html">
  <div class="note" :style="note">
    <span>this is my app</span><br>
    <span>this is my app</span><br>
    <span>this is my app</span><br>
  </div>
</template>

<script>
import backgroundImg from './assets/images/background.png'

export default {
  name: 'App',
  created() {
    console.log(backgroundImg)
  },
  data() {
    return {
      note: {
        backgroundImage: 'url(' + backgroundImg + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        marginTop: '5px',
      }
    }
  }
}
</script>

<style scoped>

</style>