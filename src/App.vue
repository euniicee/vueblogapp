<template>
  <ErrorBoundary>
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback>
        <LoadingSpinner message="Loading application..." />
      </template>
    </Suspense>
  </ErrorBoundary>
</template>

<script setup>
import { RouterView } from 'vue-router';
import ErrorBoundary from './components/ErrorBoundary.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
}
</style>