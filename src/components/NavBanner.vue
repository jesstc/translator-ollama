  <template>
    <MenuBar class="surface-overlay p-3 shadow-2 flex align-items-center justify-content-between relative lg:static">
      <template #start>
        <img height="40" viewBox="0 0 35 40" fill="none" src="@/assets/logo.png" alt="Logo" class="logo" />
      </template>
    </MenuBar>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'NavBanner',
  });
  </script>
  
  