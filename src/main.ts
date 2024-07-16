import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

// PrimeVue CSS
import 'primeicons/primeicons.css';                          // Icons
import 'primeflex/primeflex.css';                            // PrimeFlex

const app = createApp(App);

app.use(PrimeVue);

app.mount('#app');
