import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Noir from './presets/Noir.js';
import Menubar from 'primevue/menubar';
import SelectButton from 'primevue/selectbutton';

// PrimeVue CSS
import 'primeicons/primeicons.css';                          // Icons
import 'primeflex/primeflex.css';                            // PrimeFlex

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
});

app.component('MenuBar', Menubar);
app.component('SelectButton', SelectButton);

app.mount('#app');
