import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Menubar from 'primevue/menubar';
import SelectButton from 'primevue/selectbutton';
import Stepper from 'primevue/stepper';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import Button from 'primevue/button';

// PrimeVue CSS
import 'primeicons/primeicons.css';                          // Icons
import 'primeflex/primeflex.css';                            // PrimeFlex

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false
        }
    }
});

app.component('Menubar', Menubar);
app.component('SelectButton', SelectButton);
app.component('Stepper', Stepper);
app.component('StepItem', StepItem);
app.component('Step', Step);
app.component('StepPanel', StepPanel);
app.component('Button', Button);

app.mount('#app');
