<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            nuxtjs + bulma + macanas
          </h1>
          <h2 class="subtitle">
            {{$store.state.personalMessage}}
            {{$store.state.counter}}
          </h2>
          <button type="" @click="$store.commit('increment')">incrmeent</button>
        </div>
      </div>
    </section>
    <post-list></post-list>
  </div>
</template>

<script>
  import PostList from '~/components/Posts.vue'
  export default {
    head: {
      title: 'Home'
    },
    components: {
      PostList
    }
  }
</script>