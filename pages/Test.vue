<template>
  <div>
  <h1>test page</h1>  
  <input type="" name="" value="" v-model="myTitle">
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      myTitle: 'rock'
    }
  },
  head: {
    title: this.myTitle
  }
}
</script>

<style>
  
</style>
