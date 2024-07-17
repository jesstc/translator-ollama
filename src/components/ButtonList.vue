    
<template>
  <div class="card flex justify-center">
    <SelectButton v-model="selectedOption" :options="options" aria-labelledby="basic" @update:model-value="handleUpdate" />
  </div>
</template>

  
<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonList',
  emits: ['updated'],
  setup(_, { emit }) {
    const options = ref<string[]>(['Text', 'Excel File']);
    const selectedOption = ref<string>('Text');

    function handleUpdate(val: string):void {
      emit('updated', val);
    }

    return {
      selectedOption,
      options,
      handleUpdate,
    };
  },
})
</script>