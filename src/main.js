import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

console.log('Starting Vue app...');

const app = createApp(App);

app.use(router);

console.log('Router installed, mounting app...');

app.mount('#app');

console.log('App mounted!');