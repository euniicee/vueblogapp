<template>
  <div class="container">
    <h1>Vue Blog</h1>
    <p>Explore articles about Vue.js</p>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id" class="post-card">
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt || post.content.slice(0, 150) + '...' }}</p>
        <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
          Read more →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { postsAPI } from '../api/posts';

const posts = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const data = await postsAPI.getPosts();
    posts.value = data;
  } catch (err) {
    error.value = 'Failed to load posts';
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.container { max-width: 800px; margin: 2rem auto; font-family: sans-serif; }
.post-card { border: 1px solid #ddd; padding: 1rem; margin-bottom: 1rem; }
</style>