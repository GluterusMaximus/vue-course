<template lang="">
  <div class="post" v-for="post in posts">
    <div>Title: <strong>{{post.title}}</strong></div>
    <div>Body: <strong>{{post.body}}</strong></div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>
