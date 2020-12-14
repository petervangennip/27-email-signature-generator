import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

// styling
import '@/css/app.css';

// Global icons
// import '@/assets/icons/icons';

createApp(App)
  .use(store)
  .mount('#app');
