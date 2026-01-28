<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
      <router-link to="/">Back to Home</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { postsAPI } from '../api/posts';

const route = useRoute();
const post = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  const id = route.params.id;
  if (!id) {
    error.value = 'No post ID';
    loading.value = false;
    return;
  }
  try {
    post.value = await postsAPI.getPost(id);
  } catch (err) {
    error.value = 'Post not found';
  } finally {
    loading.value = false;
  }
});
</script>