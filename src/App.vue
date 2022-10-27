<script>
  import PostForm from '@/components/PostForm.vue'
  import PostList from '@/components/PostList.vue'

  export default {
    components: {PostForm, PostList},
    data(){
      return {
        posts: [
          {id: 1, title: 'JavaScript', body: 'This post is about JavaScript'},
          {id: 2, title: 'TypeScript', body: 'This post is about TypeScript'},
          {id: 3, title: 'Vue', body: 'This post is about Vue'},
        ],
      }
    },
    methods: {
      createPost(post) {
        this.posts.push(post)
      }
    }
  }
</script>

<template>
  <div class="app">
    <PostForm @create="createPost" />
    <PostList :posts="posts"/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
