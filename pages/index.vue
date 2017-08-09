<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to the JavaScript SSR Blog.
          </h1>
          <h2 class="subtitle">
            Hope you find something you like.
          </h2>
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