    
<template>
  <div class="card flex justify-center">
    <Select v-model="selectedOption" :options="options" optionLabel="name" placeholder="Select the translate model" class="w-full md:w-56" />
  </div>
</template>

  
<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'Selection',
  emits: ['updatedModel'],
  setup(_, { emit }) {
    interface ModelOpt {
      name: String;
      code: String;
    }
    const options = ref<ModelOpt[]>([
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
    ]);
    const selectedOption = ref<string>();

    function handleUpdate(val: string):void {
      emit('updatedModel', val);
    }

    return {
      selectedOption,
      options,
      handleUpdate,
    };
  },
})
</script>