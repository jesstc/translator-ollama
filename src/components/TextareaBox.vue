    
<template>
  <div class="card flex">
    <FloatLabel>
      <Textarea v-model="value" rows="5" cols="30" />
      <label>{{ label }}</label>
    </FloatLabel>
  </div>
</template>

  
<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'TextareaBox',
  props: {
    label: String,
  },
  emits: ['updated'],
  setup() {
    const value = ref<string>();

    return {
      value,
    };
  },
})
</script>