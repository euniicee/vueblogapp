<template>
  <div class="not-found-page">
    <div class="content">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">Page Not Found</h2>
      <p class="error-message">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div class="actions">
        <button @click="goBack" class="back-button">
          ← Go Back
        </button>
        <router-link to="/" class="home-button">
          Go to Home Page
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.not-found-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9fafb;
  padding: 1rem;
}

.content {
  text-align: center;
  max-width: 32rem;
}

.error-code {
  font-size: 8rem;
  font-weight: 700;
  color: #d1d5db;
  margin: 0;
  line-height: 1;
}

.error-title {
  font-size: 2rem;
  font-weight: 600;
  color: #111827;
  margin: 1rem 0 0.5rem 0;
}

.error-message {
  color: #6b7280;
  font-size: 1.125rem;
  margin: 0 0 2rem 0;
  line-height: 1.6;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.back-button {
  background-color: #6b7280;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.back-button:hover {
  background-color: #4b5563;
}

.home-button {
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.2s;
}

.home-button:hover {
  background-color: #2563eb;
}
</style>