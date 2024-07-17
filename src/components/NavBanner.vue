  <template>
    <Menubar class="surface-overlay p-3 shadow-2 flex align-items-center justify-content-between relative lg:static">
      <template #start>
        <img height="40" viewBox="0 0 35 40" fill="none" src="@/assets/logo.png" alt="Logo" class="logo" />
      </template>
    </Menubar>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Menubar from 'primevue/menubar';

  export default defineComponent({
    name: 'NavBanner',
    components: {
      Menubar
    }
  });
  </script>
  
  