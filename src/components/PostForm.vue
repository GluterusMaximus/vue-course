<template lang="">
  <form @submit.prevent>
      <h4>Post Creation</h4>
      <input class="input" v-model="post.title" type="text" placeholder="Title">
      <input class="input" v-model="post.body" type="text" placeholder="Body">
      <button class="btn" @click="createPost">Create</button>
  </form> 
</template>

<script>
  export default {
    data() {
      return {
        post: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      createPost(event) {
        this.post.id = Date.now()
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: ''
        }
      }
    }
  }
</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
}
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>